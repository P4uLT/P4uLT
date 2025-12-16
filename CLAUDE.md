# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub profile repository (P4uLT/P4uLT) containing an automated README generator system. The repository generates the profile README.md displayed at github.com/P4uLT using a Node.js-based generator with multiple customizable styles.

### Architecture

**Technology Stack**: Node.js, Handlebars templating, configuration-driven approach

**Project Structure**:
```
P4uLT/
├── .claude/
│   ├── commands/                # Directory for custom slash commands (currently empty)
│   └── settings.local.json      # Local Claude Code settings
├── scripts/
│   └── generate.js              # Main generator CLI with auto-discovery
├── templates/
│   └── status-page.hbs          # SRE-themed status page template
├── profile.config.js            # Centralized profile configuration
├── package.json                 # Dependencies & npm scripts
├── GENERATOR.md                 # Generator documentation
├── CLAUDE.md                    # This file
└── README.md                    # Generated output (not manually edited)
```

**Key Components**:
- **Generator Script** (/home/p4ult/Projects/Github/P4uLT/scripts/generate.js): CLI tool with auto-discovery, input sanitization, template rendering, and error handling. Dynamically discovers available templates from the templates/ directory.
- **Templates** (/home/p4ult/Projects/Github/P4uLT/templates/*.hbs): Handlebars templates for different profile styles. Currently contains status-page.hbs (SRE-themed).
- **Configuration** (/home/p4ult/Projects/Github/P4uLT/profile.config.js): Single source of truth for all profile data

**Design Principles**:
- **Configuration-Only Data Source**: Templates MUST exclusively use data from profile.config.js. Templates should NOT:
  - Make external API calls
  - Read other files
  - Pull data from environment variables or other external sources
  - Access any data not explicitly passed from the configuration
- **Single Source of Truth**: All profile data lives in profile.config.js, ensuring predictable behavior and easy maintenance
- **Clear Separation of Concerns**: Templates handle presentation only; configuration handles all data

## Profile Information

- **Name**: P4uLT (Thomas Samter)
- **Role**: Engineer Manager SRE at Datadome
- **Location**: France
- **Expertise**: SRE, Observability (Prometheus/Grafana), Infrastructure as Code, Home Automation

## Generator System

### How It Works

1. Profile data is defined in `profile.config.js`
2. Generator script auto-discovers available templates from the templates/ directory
3. Generator reads configuration and loads selected template
4. Handlebars renders the template with configuration data, using registered helpers for badges and dates
5. Output is written to `README.md`

### Available Styles

Currently available template:

**SRE Status Page Style:**
- **status-page**: Advanced SRE-themed profile with:
  - System status indicators and uptime metrics
  - Observability command center (Prometheus/Grafana dashboards)
  - Engineering philosophy and SRE principles
  - Battle-tested lessons and wisdom
  - Home lab automation showcase with WAF (Wife Approval Factor)
  - SRE principles applied to personal projects

### CLI Usage

```bash
# Generate with default style (professional - fallback if not found)
npm run generate

# Generate with status-page style
npm run style:status-page

# Or use the script directly
node scripts/generate.js --style=status-page

# The generator auto-discovers available templates
# To see available styles, run without arguments and check the error message
```

### Template Auto-Discovery

The generator automatically discovers templates at startup by scanning the templates/ directory for .hbs files. This means:
- No need to manually update a list of available styles
- Adding a new template file automatically makes it available
- The generator will show all available styles if an invalid style is requested

### Security Features

- Input sanitization for style names (alphanumeric and hyphens only)
- Template path validation
- Configuration validation
- .gitignore configured for node_modules/

## Editing Guidelines

### To Update Profile Content

**DO**: Edit `/home/p4ult/Projects/Github/P4uLT/profile.config.js` to modify:
- Personal information (name, title, company, location)
- About section (current work, learning goals, expertise)
- Technologies and tools (with icon URLs)
- Social links (LinkedIn, StackOverflow, email)
- GitHub stats configuration

**DO NOT**: Manually edit `README.md` - it is auto-generated and will be overwritten

### To Modify Profile Appearance

**DO**: Edit template files in `/home/p4ult/Projects/Github/P4uLT/templates/`:

Currently available template:
- `status-page.hbs` - Advanced SRE style with observability dashboards, engineering philosophy, home lab showcase

Use Handlebars syntax to access configuration variables:
```handlebars
{{profile.displayName}}
{{about.currentWork}}
{{#each technologies.languages}}
  {{this.name}}
{{/each}}
```

**IMPORTANT - Template Data Source Constraint**:
Templates MUST only use data from profile.config.js. Never:
- Make external API calls (e.g., fetching GitHub stats dynamically)
- Read other files or environment variables
- Use Handlebars helpers that access external data sources
- Pull data from any source other than the configuration object

All data needed by templates must be explicitly defined in profile.config.js. If you need dynamic data (like GitHub stats), use static image URLs or badges that GitHub/shields.io generates, rather than fetching data at template render time.

### Configuration Structure

Key configuration sections in `profile.config.js`:
- `profile.*` - Basic profile information (username, displayName, realName, title, company, location)
- `about.*` - About section content (currentWork, currentlyLearning, askMeAbout)
- `social.*` - Social media links (linkedin.id, email.address)
- `sreMojo.*` - SRE-specific sections:
  - `motto` - Personal SRE motto
  - `funFacts[]` - Array of SRE-related fun facts
  - `principles[]` - Array of engineering principles with icon, title, description
- `sreWisdom.*` - SRE lessons and quotes:
  - `lessons[]` - Array of battle-tested lessons
  - `quote` - Inspirational quote
- `statusPage.*` - Status page specific configuration:
  - `statusHeader` - System status, uptime, last incident
  - `systemStatus[]` - Array of system components and their status
  - `passions[]` - Array of passion areas
  - `prometheus.metrics[]` - Prometheus metrics display
  - `grafana.dashboards[]` - Grafana dashboard display
  - `homeLab.*` - Home lab configuration including metrics, WAF, and principles
  - `otherAdventures[]` - Additional project areas
  - `footer` - Footer taglines and quote

Note: The current configuration is optimized for the status-page template. Legacy configuration sections (technologies, stats, etc.) are validated by the generator but not used by the current template.

### Technologies

Current technology stack referenced in the status-page template:
- **Observability**: Prometheus, Grafana (displayed in the observability command center)
- **Home Automation**: Home Assistant, ESPHome, MQTT, Node-RED (displayed in home lab section)

Note: The configuration file supports a technologies section with arrays for languages, observability, sre, databases, os, and hobbies, but the current status-page template does not render these. The generator validates these sections if present but treats missing sections as empty arrays.

## Common Tasks

### Update Profile Content
1. Edit `/home/p4ult/Projects/Github/P4uLT/profile.config.js`
2. Run `npm run generate` or `npm run style:status-page`
3. Verify changes in `README.md`
4. Commit and push

### Generate Profile
```bash
# Current available style
npm run style:status-page     # For SRE status page profile

# Or use the generator directly
node scripts/generate.js --style=status-page
```

### Update Status Page Configuration
1. Edit `profile.config.js`
2. Modify relevant sections:
   - `statusPage.*` - System status, metrics, dashboards
   - `sreMojo.*` - Motto, fun facts, principles
   - `sreWisdom.*` - Lessons and quotes
   - `statusPage.homeLab.*` - Home lab metrics and WAF
3. Regenerate: `npm run style:status-page`

### Create Custom Template
1. Create new `.hbs` file in `/home/p4ult/Projects/Github/P4uLT/templates/` (e.g., `my-style.hbs`)
2. Use Handlebars syntax with config variables from `profile.config.js`
3. Template will be auto-discovered by the generator
4. Add npm script to `package.json`: `"style:my-style": "node scripts/generate.js --style=my-style"`
5. Test: `npm run style:my-style`

### Troubleshooting
- **Template not found**: Ensure template file exists in `templates/` directory with `.hbs` extension
- **Config error**: Verify `profile.config.js` syntax (valid JavaScript module.exports)
- **Invalid style**: Style names must be alphanumeric with hyphens only
- **Dependencies missing**: Run `npm install` to install Handlebars and js-yaml

## Development Notes

### Dependencies
- `handlebars@^4.7.8` - Template rendering
- `js-yaml@^4.1.0` - YAML parsing (future use)

### Generator Features
- **Auto-discovery**: Automatically finds available templates in templates/ directory
- **Secure input validation**: Sanitizes style names (alphanumeric and hyphens only)
- **Clear error messages**: Shows available styles when invalid style is requested
- **Configuration validation**: Validates required config sections and provides warnings for missing optional sections
- **Handlebars helpers**: Custom helpers for badge generation (badge, socialBadge), date formatting (dateNow, dateDaysAgo)
- **Extensible template system**: Simply add .hbs files to templates/ directory

### Best Practices
- Always regenerate README.md after config changes
- Test templates before committing
- Maintain icon URL validity (use CDN links)
- Keep configuration modular and organized
- Document custom templates in GENERATOR.md
- **Templates use config data only**: Never add external data sources to templates (API calls, file reads, etc.)
- **All data in configuration**: If a template needs data, add it to profile.config.js first
- **Use static URLs for dynamic content**: For GitHub stats, badges, and similar dynamic content, use URL-based services (shields.io, GitHub Readme Stats) rather than fetching data at render time
- **Predictable rendering**: Templates should produce identical output given identical configuration input

## Additional Documentation

For detailed generator usage, template creation, and configuration reference, see `/home/p4ult/Projects/Github/P4uLT/GENERATOR.md`
