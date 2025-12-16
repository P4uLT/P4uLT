# GitHub Profile Generator

A customizable GitHub profile README generator with multiple styles.

## Quick Start

```bash
npm install
npm run generate
```

## Usage

### Generate with Available Style

```bash
# Currently available style
npm run style:status-page
```

Or use the generator directly:

```bash
npm run generate
node scripts/generate.js --style=status-page
```

The generator auto-discovers templates from the templates/ directory. To see all available styles, run the generator with an invalid style name and it will list available options.

## Available Styles

### SRE & Observability Styles

#### Status Page
Advanced SRE-themed profile with observability command center, Prometheus/Grafana dashboards, engineering philosophy, battle-tested lessons, and smart home lab sections with WAF (Wife Approval Factor) metric.

**Best for**: Site Reliability Engineers, DevOps professionals showcasing monitoring expertise and SRE culture

**Features**:
- System status indicators with uptime metrics
- Prometheus metrics dashboard (scrape targets, ingestion rate, query latency, alerting status)
- Grafana dashboards display (production, monitoring, analytics, visualization, data sources)
- Engineering philosophy with 6 core principles (Automation First, Measure Everything, Data-Driven, Blameless Culture, Continuous Improvement, Simplicity Wins)
- Battle-tested SRE wisdom and lessons learned
- Home lab automation showcase with metrics (ESP32 devices, sensors, automations, MQTT traffic, uptime)
- Wife Approval Factor (WAF) metric for home automation projects
- SRE principles applied to personal projects
- Additional adventures section for DIY projects and open source contributions

**Template file**: `templates/status-page.hbs`

## Configuration

Edit `profile.config.js` to customize your profile. The current configuration is optimized for the status-page template:

```javascript
module.exports = {
  profile: {
    username: 'your-username',
    displayName: 'YourName',
    realName: 'Your Real Name',
    title: 'Your Title',
    company: 'Company Name',
    location: 'Your Location'
  },

  about: {
    currentWork: 'What you do now',
    currentlyLearning: 'What you are learning',
    askMeAbout: 'Your expertise'
  },

  social: {
    linkedin: { id: 'your-linkedin-id' },
    email: { address: 'your@email.com' }
  },

  // SRE-specific configuration for status-page template
  sreMojo: {
    motto: 'Your SRE motto',
    funFacts: [
      'Fun fact 1',
      'Fun fact 2'
    ],
    principles: [
      { icon: '🔧', title: 'Principle Name', description: 'Description' }
    ]
  },

  sreWisdom: {
    lessons: [
      'Lesson 1',
      'Lesson 2'
    ],
    quote: 'Inspirational quote'
  },

  statusPage: {
    statusHeader: {
      systemStatus: 'ALL_SYSTEMS_OPERATIONAL',
      uptime: '99.99',
      lastIncident: '90+_DAYS_AGO'
    },
    systemStatus: [
      { name: 'Component Name', status: 'OPERATIONAL' }
    ],
    passions: [
      'Passion 1',
      'Passion 2'
    ],
    prometheus: {
      metrics: [
        { name: 'Metric Name', value: 'VALUE', color: '00FF00' }
      ]
    },
    grafana: {
      dashboards: [
        { name: 'Dashboard Name', value: 'ACTIVE', color: '00FF00' }
      ]
    },
    homeLab: {
      quote: 'Your home lab philosophy',
      metrics: [
        { name: 'Device Count', value: 'MANY', color: 'FF6B00' }
      ],
      waf: {
        value: 'HIGH',
        color: '00FFD9'
      },
      principlesApplied: [
        { title: 'Principle Name', description: 'How you applied it' }
      ]
    },
    otherAdventures: [
      { title: 'Adventure Name', status: '🟢 Status', statusLabel: 'Description' }
    ],
    footer: {
      tagline1: 'Tagline 1',
      tagline2: 'Tagline 2',
      tagline3: 'Tagline 3',
      quote: 'Footer quote'
    }
  }
}
```

## Adding New Templates

The generator uses auto-discovery, so adding new templates is simple:

1. Create a new template file in `templates/` directory:
   ```bash
   touch templates/my-style.hbs
   ```

2. Use Handlebars syntax with config variables:
   ```handlebars
   # {{profile.displayName}}
   {{about.currentWork}}
   {{#each sreMojo.principles}}
   - {{this.title}}: {{this.description}}
   {{/each}}
   ```

3. The template is automatically discovered by the generator

4. (Optional) Add npm script to `package.json` for convenience:
   ```json
   "style:my-style": "node scripts/generate.js --style=my-style"
   ```

5. Test it:
   ```bash
   npm run style:my-style
   # or
   node scripts/generate.js --style=my-style
   ```

## Template Variables

Available variables in templates (current configuration):

**Profile Section:**
- `profile.username` - GitHub username
- `profile.displayName` - Display name
- `profile.realName` - Real name
- `profile.title` - Job title
- `profile.company` - Company name
- `profile.location` - Location

**About Section:**
- `about.currentWork` - Current work description
- `about.currentlyLearning` - What you're learning
- `about.askMeAbout` - Your expertise

**Social Links:**
- `social.linkedin.id` - LinkedIn ID
- `social.email.address` - Email address

**SRE Mojo (for status-page template):**
- `sreMojo.motto` - SRE motto/philosophy
- `sreMojo.funFacts[]` - Array of SRE-related fun facts
- `sreMojo.principles[]` - Array of engineering principles (icon, title, description)

**SRE Wisdom (for status-page template):**
- `sreWisdom.lessons[]` - Array of battle-tested lessons
- `sreWisdom.quote` - Inspirational quote

**Status Page (for status-page template):**
- `statusPage.statusHeader.*` - System status, uptime, last incident
- `statusPage.systemStatus[]` - Array of system components and status
- `statusPage.passions[]` - Array of passion areas
- `statusPage.prometheus.metrics[]` - Prometheus metrics (name, value, color)
- `statusPage.grafana.dashboards[]` - Grafana dashboards (name, value, color)
- `statusPage.homeLab.*` - Home lab configuration:
  - `quote` - Lab philosophy
  - `metrics[]` - Lab metrics (name, value, color)
  - `waf` - Wife Approval Factor (value, color)
  - `principlesApplied[]` - Principles applied (title, description)
- `statusPage.otherAdventures[]` - Additional projects (title, status, statusLabel)
- `statusPage.footer.*` - Footer taglines and quote

**Handlebars Helpers:**
- `{{badge tech}}` - Generate shields.io badge for technology object
- `{{socialBadge platform label bgColor logo}}` - Generate social badge
- `{{dateNow}}` - Current date in ISO format
- `{{dateDaysAgo days}}` - Date N days ago in ISO format

## Tips

- Run `npm run generate` to use the default style (falls back to 'professional' if not found)
- The generator auto-discovers all templates in the templates/ directory
- All templates use the same configuration file for data
- Preview your profile locally by viewing README.md before committing
- Customize templates to match your personal brand
- Use Handlebars helpers for dynamic content (badges, dates)
- Templates should only use data from profile.config.js (no external API calls or file reads)

## File Structure

```
P4uLT/
├── .claude/
│   ├── commands/                # Directory for custom slash commands (currently empty)
│   └── settings.local.json      # Local Claude Code settings
├── scripts/
│   └── generate.js              # Main generator script with auto-discovery
├── templates/
│   └── status-page.hbs          # SRE-themed status page style
├── profile.config.js            # Your configuration
├── package.json                 # Dependencies and scripts
├── GENERATOR.md                 # This file
├── CLAUDE.md                    # Claude Code instructions
└── README.md                    # Generated profile (auto-generated, do not edit)
```

## Generator Features

- **Auto-Discovery**: Automatically discovers all .hbs templates in the templates/ directory
- **Input Validation**: Sanitizes style names to prevent path traversal and injection attacks
- **Configuration Validation**: Validates required config sections, warns about missing optional sections
- **Handlebars Helpers**: Custom helpers for badge generation and date formatting
- **Clear Error Messages**: Shows available styles when an invalid style is requested
- **Extensible**: Simply add new .hbs files to templates/ directory to add new styles