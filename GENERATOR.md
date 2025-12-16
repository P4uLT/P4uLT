# GitHub Profile Generator

A customizable GitHub profile README generator with multiple styles.

## Quick Start

```bash
npm install
npm run generate
```

## Usage

### Generate with Specific Style

```bash
# Classic styles
npm run style:professional
npm run style:minimalist
npm run style:detailed

# SRE & Observability styles
npm run style:fancy-sre
npm run style:grafana-dashboard
npm run style:grafana-dashboard-advanced
npm run style:prometheus-metrics
npm run style:sre-status-page

# Technical styles
npm run style:terminal-hacker
npm run style:k8s-status
npm run style:system-monitor
npm run style:api-docs
```

Or use the generator directly:

```bash
npm run generate -- --style=professional
node scripts/generate.js --style=fancy-sre
```

## Available Styles

### Classic Styles

#### Professional
Modern professional style with shields.io badges, comprehensive stats, and polished presentation.

**Best for**: Enterprise profiles, job hunting, professional networking

#### Minimalist
Clean, text-focused style with minimal graphics and quick-to-scan layout.

**Best for**: Developers who prefer simplicity, fast loading times

#### Detailed
Comprehensive style with centered layout, multiple stats cards, and featured projects.

**Best for**: Showcasing technical depth, impressive visual impact

### SRE & Observability Styles

#### Fancy SRE
Advanced SRE-themed profile with observability command center, Prometheus/Grafana dashboards, engineering philosophy, and smart home lab sections.

**Best for**: Site Reliability Engineers, DevOps professionals showcasing monitoring expertise

#### Grafana Dashboard
Grafana-inspired dashboard layout with real-time metrics visualization and system status panels.

**Best for**: Monitoring specialists, data visualization enthusiasts

#### Grafana Dashboard Advanced
Enhanced Grafana dashboard with advanced metrics, alerting status, and comprehensive observability panels.

**Best for**: Advanced SRE/DevOps professionals with deep monitoring expertise

#### Prometheus Metrics
Prometheus-style metrics exposition format showcasing skills and project stats as time-series data.

**Best for**: Metrics-focused engineers, Prometheus enthusiasts

#### SRE Status Page
Status page layout displaying system reliability, incident timelines, and SLO tracking.

**Best for**: Reliability engineers emphasizing uptime and incident response

### Technical Styles

#### Terminal Hacker
Retro terminal/hacker aesthetic with ASCII art and command-line styling.

**Best for**: Security professionals, CTF players, terminal enthusiasts

#### K8s Status
Kubernetes-themed profile with cluster status, pod health, and container orchestration focus.

**Best for**: Kubernetes engineers, cloud-native developers

#### System Monitor
System monitoring dashboard showing resource utilization, performance metrics, and health checks.

**Best for**: Systems engineers, performance optimization specialists

#### API Docs
API documentation style profile with endpoint specifications and technical reference format.

**Best for**: API developers, backend engineers, technical writers

## Configuration

Edit `profile.config.js` to customize your profile:

```javascript
module.exports = {
  profile: {
    username: 'your-username',
    displayName: 'YourName',
    realName: 'Your Real Name',
    title: 'Your Title',
    company: 'Company Name',
    companyUrl: 'https://company.com',
    location: 'Your Location',
    tagline: 'Your tagline',
    greeting: 'Your greeting message'
  },

  about: {
    currentWork: 'What you do now',
    currentlyLearning: 'What you are learning',
    askMeAbout: 'Your expertise',
    collaborateOn: 'What you want to collaborate on',
    funFact: 'A fun fact about you'
  },

  technologies: {
    languages: [
      { name: 'Python', icon: 'icon-url', badge: { logo: 'python', color: '3776AB' } }
    ],
    observability: [
      { name: 'Prometheus', icon: 'icon-url', badge: { logo: 'prometheus', color: 'E6522C' } }
    ],
    sre: [
      { name: 'Docker', icon: 'icon-url', badge: { logo: 'docker', color: '2496ED' } }
    ],
    databases: [
      { name: 'MariaDB', icon: 'icon-url', badge: { logo: 'mariadb', color: '003545' } }
    ],
    hobbies: [
      { name: 'Home Assistant', icon: 'icon-url', badge: { logo: 'home-assistant', color: '41BDF5' } }
    ]
  },

  social: {
    linkedin: { id: 'your-linkedin-id' },
    stackoverflow: { id: 'your-stackoverflow-id' },
    email: { address: 'your@email.com' }
  },

  // SRE-specific configuration for SRE-themed templates
  sreMojo: {
    motto: 'Your SRE motto',
    funFacts: ['Fact 1', 'Fact 2'],
    principles: [
      { icon: '🔧', title: 'Principle Name', description: 'Description' }
    ]
  },

  personalProjects: [
    { project: 'Project Name', status: 'Status', activity: 'Activity', priority: 'Priority' }
  ]
}
```

## Adding New Templates

1. Create a new template file in `templates/` directory:
   ```bash
   touch templates/my-style.hbs
   ```

2. Use Handlebars syntax with config variables:
   ```handlebars
   # {{profile.displayName}}
   {{about.currentWork}}
   ```

3. Add npm script to `package.json`:
   ```json
   "style:my-style": "node scripts/generate.js --style=my-style"
   ```

4. Test it:
   ```bash
   npm run style:my-style
   ```

## Template Variables

Available variables in templates:

**Profile Section:**
- `profile.username` - GitHub username
- `profile.displayName` - Display name
- `profile.realName` - Real name
- `profile.title` - Job title
- `profile.company` - Company name
- `profile.companyUrl` - Company URL
- `profile.location` - Location
- `profile.tagline` - Profile tagline
- `profile.greeting` - Greeting message

**About Section:**
- `about.currentWork` - Current work description
- `about.currentlyLearning` - What you're learning
- `about.askMeAbout` - Your expertise
- `about.collaborateOn` - Collaboration interests
- `about.funFact` - Fun fact

**Technologies (Arrays):**
- `technologies.languages[]` - Programming languages
- `technologies.observability[]` - Monitoring tools
- `technologies.sre[]` - SRE/DevOps tools
- `technologies.databases[]` - Database systems
- `technologies.hobbies[]` - Personal hobby projects

**Social Links:**
- `social.linkedin.id` - LinkedIn ID
- `social.stackoverflow.id` - Stack Overflow ID
- `social.email.address` - Email address

**GitHub Stats:**
- `stats.showTopLanguages` - Boolean
- `stats.showStats` - Boolean
- `stats.showPinnedRepo` - Boolean
- `stats.pinnedRepo` - Pinned repository name
- `stats.statsTheme.*` - GitHub stats theme colors

**SRE-Specific (for SRE templates):**
- `sreMojo.motto` - SRE motto/philosophy
- `sreMojo.funFacts[]` - SRE-related fun facts
- `sreMojo.principles[]` - Engineering principles
- `personalProjects[]` - Project tracking array
- `statusAlerts[]` - Status alert badges

## Tips

- Run `npm run generate` to use the default (professional) style
- Switch styles anytime without losing data
- All styles use the same configuration file
- Preview your profile locally before committing
- Customize templates to match your personal brand

## File Structure

```
P4uLT/
├── scripts/
│   └── generate.js              # Main generator script
├── templates/
│   ├── professional.hbs         # Professional style
│   ├── minimalist.hbs           # Minimalist style
│   ├── detailed.hbs             # Detailed style
│   ├── fancy-sre.hbs            # Advanced SRE style
│   ├── grafana-dashboard.hbs    # Grafana dashboard style
│   ├── grafana-dashboard-advanced.hbs  # Advanced Grafana style
│   ├── grafana-dashboard-v2.hbs # Grafana dashboard v2
│   ├── prometheus-metrics.hbs   # Prometheus metrics style
│   ├── sre-status-page.hbs      # SRE status page style
│   ├── terminal-hacker.hbs      # Terminal hacker style
│   ├── k8s-status.hbs           # Kubernetes status style
│   ├── system-monitor.hbs       # System monitor style
│   └── api-docs.hbs             # API documentation style
├── profile.config.js            # Your configuration
├── package.json                 # Dependencies and scripts
├── GENERATOR.md                 # This file
├── CLAUDE.md                    # Claude Code instructions
└── README.md                    # Generated profile
```