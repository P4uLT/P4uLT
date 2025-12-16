#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const AVAILABLE_STYLES = (() => {
  const templatesDir = path.join(__dirname, '..', 'templates');
  try {
    return fs.readdirSync(templatesDir)
      .filter(file => file.endsWith('.hbs'))
      .map(file => file.replace('.hbs', ''))
      .sort();
  } catch (error) {
    console.error('⚠️  Warning: Could not auto-discover templates, using defaults');
    return ['professional', 'minimalist', 'detailed'];
  }
})();
const DEFAULT_STYLE = 'professional';

function sanitizeStyle(style) {
  if (!/^[a-zA-Z0-9-]+$/.test(style)) {
    console.error(`❌ Error: Invalid style name "${style}"`);
    console.error('Style names can only contain letters, numbers, and hyphens.');
    process.exit(1);
  }
  return style;
}

function parseArgs() {
  const args = process.argv.slice(2);
  let style = DEFAULT_STYLE;

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--style=')) {
      style = sanitizeStyle(args[i].split('=')[1]);
    } else if (args[i] === '--style' && args[i + 1]) {
      style = sanitizeStyle(args[i + 1]);
      i++;
    }
  }

  if (!AVAILABLE_STYLES.includes(style)) {
    console.error(`❌ Error: Unknown style "${style}"`);
    console.error(`Available styles: ${AVAILABLE_STYLES.join(', ')}`);
    process.exit(1);
  }

  return { style };
}

function validateConfig(config) {
  const required = ['profile', 'about', 'social'];

  required.forEach(key => {
    if (!config[key]) {
      throw new Error(`Missing required config section: ${key}`);
    }
  });

  if (config.technologies) {
    const techCategories = ['languages', 'observability', 'sre', 'databases', 'os', 'hobbies'];
    techCategories.forEach(cat => {
      if (!config.technologies[cat]) {
        console.warn(`⚠️  Warning: Missing technology category "${cat}", using empty array`);
        config.technologies[cat] = [];
      } else if (!Array.isArray(config.technologies[cat])) {
        throw new Error(`Config error: technologies.${cat} must be an array`);
      }
    });
  }

  if (!config.profile.username) {
    throw new Error('Missing required field: profile.username');
  }

  return config;
}

function loadConfig() {
  const configPath = path.join(__dirname, '..', 'profile.config.js');

  if (!fs.existsSync(configPath)) {
    console.error('❌ Error: profile.config.js not found');
    process.exit(1);
  }

  try {
    const config = require(configPath);
    return validateConfig(config);
  } catch (error) {
    console.error('❌ Error loading config:', error.message);
    process.exit(1);
  }
}

function sanitizeForBadge(str) {
  return str
    .replace(/-/g, '--')
    .replace(/_/g, '__')
    .replace(/ /g, '_')
    .replace(/[^\w\s-]/g, '');
}

function sanitizeUrlParam(str) {
  return encodeURIComponent(str).replace(/%20/g, '+');
}

function registerHelpers(config) {
  Handlebars.registerHelper('badge', function(tech) {
    if (!tech.badge) return '';

    const style = sanitizeUrlParam(config.badges?.style || 'for-the-badge');
    const logoColor = sanitizeUrlParam(tech.badge.logoColor || config.badges?.defaultLogoColor || 'white');
    const label = sanitizeForBadge(tech.name || 'unknown');
    const color = sanitizeUrlParam(tech.badge.color || '000000');
    const logo = sanitizeUrlParam(tech.badge.logo || '');

    return `https://img.shields.io/badge/${label}-${color}?style=${style}&logo=${logo}&logoColor=${logoColor}`;
  });

  Handlebars.registerHelper('socialBadge', function(platform, label, bgColor, logo) {
    const style = sanitizeUrlParam(config.badges?.style || 'for-the-badge');
    const logoColor = sanitizeUrlParam(config.badges?.defaultLogoColor || 'white');
    const badgeLabel = sanitizeForBadge(label || 'social');
    const color = sanitizeUrlParam(bgColor || '000000');
    const logoParam = sanitizeUrlParam(logo || '');

    return `https://img.shields.io/badge/${badgeLabel}-${color}?style=${style}&logo=${logoParam}&logoColor=${logoColor}`;
  });

  Handlebars.registerHelper('dateNow', function() {
    const now = new Date();
    return now.toISOString().split('T')[0];
  });

  Handlebars.registerHelper('dateDaysAgo', function(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
  });
}

function loadTemplate(style) {
  const templatePath = path.join(__dirname, '..', 'templates', `${style}.hbs`);

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Error: Template "${style}.hbs" not found`);
    process.exit(1);
  }

  try {
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    return Handlebars.compile(templateContent);
  } catch (error) {
    console.error('❌ Error loading template:', error.message);
    process.exit(1);
  }
}

function generateReadme(config, template) {
  try {
    return template(config);
  } catch (error) {
    console.error('❌ Error rendering template:', error.message);
    process.exit(1);
  }
}

function writeReadme(content) {
  const readmePath = path.join(__dirname, '..', 'README.md');

  try {
    fs.writeFileSync(readmePath, content, 'utf8');
    return readmePath;
  } catch (error) {
    console.error('❌ Error writing README.md:', error.message);
    process.exit(1);
  }
}

function main() {
  console.log('🚀 GitHub Profile Generator\n');

  const { style } = parseArgs();
  console.log(`📝 Using style: ${style}`);

  console.log('📂 Loading configuration...');
  const config = loadConfig();

  console.log('🔧 Registering Handlebars helpers...');
  registerHelpers(config);

  console.log(`🎨 Loading template: ${style}.hbs`);
  const template = loadTemplate(style);

  console.log('⚙️  Generating README...');
  const content = generateReadme(config, template);

  console.log('💾 Writing README.md...');
  const outputPath = writeReadme(content);

  console.log(`\n✅ Success! README.md generated with "${style}" style`);
  console.log(`📄 Output: ${outputPath}`);
  console.log('\n💡 Tip: Try other styles with:');
  AVAILABLE_STYLES.forEach(s => {
    if (s !== style) {
      console.log(`   npm run style:${s}`);
    }
  });
}

if (require.main === module) {
  main();
}

module.exports = { loadConfig, loadTemplate, generateReadme };