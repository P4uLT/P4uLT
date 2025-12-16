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
│   └── commands/
│       └── git-profile-add.md   # Slash command for creating templates
├── scripts/
│   └── generate.js              # Main generator CLI
├── templates/
│   ├── professional.hbs         # Professional style template
│   ├── minimalist.hbs           # Minimalist style template
│   ├── detailed.hbs             # Detailed style template
│   ├── fancy-sre.hbs            # Advanced SRE style template
│   ├── grafana-dashboard*.hbs   # Grafana-themed templates
│   ├── prometheus-metrics.hbs   # Prometheus metrics template
│   ├── sre-status-page.hbs      # SRE status page template
│   ├── terminal-hacker.hbs      # Terminal hacker style template
│   ├── k8s-status.hbs           # Kubernetes status template
│   ├── system-monitor.hbs       # System monitor template
│   └── api-docs.hbs             # API documentation template
├── profile.config.js            # Centralized profile configuration
├── package.json                 # Dependencies & npm scripts
├── GENERATOR.md                 # Generator documentation
├── CLAUDE.md                    # This file
└── README.md                    # Generated output (not manually edited)
```

**Key Components**:
- **Generator Script** (/home/p4ult/Projects/Github/P4uLT/scripts/generate.js): CLI tool with input sanitization, template rendering, and error handling
- **Templates** (/home/p4ult/Projects/Github/P4uLT/templates/*.hbs): Handlebars templates for different profile styles
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
- **Role**: Lead Infrastructure Engineer at Datadome
- **Location**: France
- **Expertise**: C# / .Net Core, Java / Spring Boot, Monitoring, Infrastructure

## Generator System

### How It Works

1. Profile data is defined in `profile.config.js`
2. Generator script reads configuration and loads selected template
3. Handlebars renders the template with configuration data
4. Output is written to `README.md`

### Available Styles

**Classic Styles:**
- **professional**: Modern style with shields.io badges, comprehensive stats (default)
- **minimalist**: Clean, text-focused with minimal graphics
- **detailed**: Comprehensive centered layout with multiple stats cards

**SRE & Observability Styles:**
- **fancy-sre**: Advanced SRE profile with observability command center, Prometheus/Grafana dashboards, engineering philosophy
- **grafana-dashboard**: Grafana-inspired dashboard with metrics visualization
- **grafana-dashboard-advanced**: Enhanced Grafana dashboard with advanced panels
- **prometheus-metrics**: Prometheus-style metrics exposition format
- **sre-status-page**: Status page layout with reliability tracking

**Technical Styles:**
- **terminal-hacker**: Retro terminal/hacker aesthetic with ASCII art
- **k8s-status**: Kubernetes-themed profile with cluster status
- **system-monitor**: System monitoring dashboard layout
- **api-docs**: API documentation style format

### CLI Usage

```bash
# Generate with default style (professional)
npm run generate

# Generate with classic styles
npm run style:professional
npm run style:minimalist
npm run style:detailed

# Generate with SRE & Observability styles
npm run style:fancy-sre
npm run style:grafana-dashboard
npm run style:grafana-dashboard-advanced
npm run style:prometheus-metrics
npm run style:sre-status-page

# Generate with technical styles
npm run style:terminal-hacker
npm run style:k8s-status
npm run style:system-monitor
npm run style:api-docs

# Or use the script directly
node scripts/generate.js --style=fancy-sre
```

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

Classic Templates:
- `professional.hbs` - Professional style
- `minimalist.hbs` - Minimalist style
- `detailed.hbs` - Detailed style

SRE & Observability Templates:
- `fancy-sre.hbs` - Advanced SRE style with observability dashboards
- `grafana-dashboard.hbs` - Grafana dashboard style
- `grafana-dashboard-advanced.hbs` - Advanced Grafana style
- `prometheus-metrics.hbs` - Prometheus metrics style
- `sre-status-page.hbs` - SRE status page style

Technical Templates:
- `terminal-hacker.hbs` - Terminal hacker aesthetic
- `k8s-status.hbs` - Kubernetes status layout
- `system-monitor.hbs` - System monitoring dashboard
- `api-docs.hbs` - API documentation format

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
- `profile.*` - Basic profile information (username, displayName, title, company, location, tagline, greeting)
- `about.*` - About section content (currentWork, currentlyLearning, askMeAbout, collaborateOn, funFact)
- `technologies.*` - Technology categories:
  - `languages` - Programming languages (Python, Bash)
  - `observability` - Monitoring tools (Prometheus, Grafana, Loki)
  - `sre` - SRE/DevOps tools (Docker, Kubernetes, Terraform, Ansible, Jenkins, Traefik, Kafka)
  - `databases` - Database systems (MariaDB, Elasticsearch)
  - `hobbies` - Personal projects (Home Assistant, ESPHome, MQTT, Node-RED, 3D Printing)
- `stats.*` - GitHub stats display options
- `social.*` - Social media links (LinkedIn, Stack Overflow, email)
- `sreMojo.*` - SRE-specific sections (motto, funFacts, principles) for SRE-themed templates
- `personalProjects.*` - Project tracking for SRE templates
- `statusAlerts.*` - Alert badges configuration

### Technologies

Current technology stack documented in config:
- **Languages**: Python, Bash
- **Observability**: Prometheus, Grafana, Loki
- **SRE/DevOps**: Docker, Kubernetes, Terraform, Ansible, Jenkins, Traefik, Kafka
- **Databases**: MariaDB, Elasticsearch
- **Home Automation Hobbies**: Home Assistant, ESPHome, MQTT, Node-RED, 3D Printing

## Common Tasks

### Update Profile Content
1. Edit `/home/p4ult/Projects/Github/P4uLT/profile.config.js`
2. Run `npm run generate` or `npm run style:<style-name>`
3. Verify changes in `README.md`
4. Commit and push

### Switch Profile Style
```bash
# Classic styles
npm run style:professional  # For professional look
npm run style:minimalist    # For clean, simple look
npm run style:detailed      # For comprehensive display

# SRE & Observability styles
npm run style:fancy-sre     # For advanced SRE profile
npm run style:grafana-dashboard  # For Grafana-inspired layout
npm run style:prometheus-metrics  # For Prometheus metrics format
npm run style:sre-status-page     # For status page layout

# Technical styles
npm run style:terminal-hacker  # For terminal/hacker aesthetic
npm run style:k8s-status       # For Kubernetes theme
npm run style:system-monitor   # For system monitoring dashboard
npm run style:api-docs         # For API documentation format
```

### Add New Technology
1. Edit `profile.config.js`
2. Add to appropriate `technologies.*` array with name and icon URL
3. Regenerate: `npm run generate`

### Create Custom Template
1. Create new `.hbs` file in `/home/p4ult/Projects/Github/P4uLT/templates/`
2. Use Handlebars syntax with config variables
3. Add npm script to `package.json`: `"style:custom": "node scripts/generate.js --style=custom"`
4. Test: `npm run style:custom`

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
- Secure input validation
- Clear error messages
- Multiple template support
- Configuration validation
- Extensible template system

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
