module.exports = {
  profile: {
    username: 'p4ult',
    displayName: 'P4uLT',
    realName: 'Thomas Samter',
    title: 'Engineer Manager SRE',
    company: 'Datadome',
    location: 'France'
  },

  about: {
    currentWork: "I'm currently at [**Datadome**](https://datadome.co) as a **Engineer Manager SRE**",
    currentlyLearning: "Continuously improving SRE practices, diving deeper into infrastructure automation",
    askMeAbout: "SRE, Observability (Prometheus/Grafana), Infrastructure as Code, Home Automation"
  },

  social: {
    linkedin: { id: 'thomas-samter-b4040437' },
    email: { address: 'p4ult@users.noreply.github.com' }
  },

  sreMojo: {
    motto: "Hope is not a strategy",
    funFacts: [
      "Uptime obsessed (99.9% is not enough!)",
      "Home automation enthusiast (everything is automated)",
      "Coffee-driven development advocate ☕",
      "Believes in monitoring ALL the things 📊",
      "If it's not in Grafana, it didn't happen",
      "Bald and proud of it 😎"
    ],
    principles: [
      { icon: "🔧", title: "Automation First", description: "Eliminate toil, automate everything repeatable" },
      { icon: "📊", title: "Measure Everything", description: "If you can't measure it, you can't improve it" },
      { icon: "🎯", title: "Data-Driven", description: "Metrics and evidence guide all decisions" },
      { icon: "🔥", title: "Blameless Culture", description: "Learn from incidents, don't point fingers" },
      { icon: "⚡", title: "Continuous Improvement", description: "Small changes, deployed frequently" },
      { icon: "🧩", title: "Simplicity Wins", description: "Complex systems fail in complex ways" }
    ]
  },

  sreWisdom: {
    lessons: [
      "\"It works on my machine\" is not a deployment strategy",
      "If you haven't tested your backups, you don't have backups",
      "The best time to test disaster recovery is before the disaster",
      "Metrics that aren't monitored might as well not exist",
      "Every \"temporary\" solution becomes permanent",
      "The bug is always in your code first, the library second",
      "Friday deployments are a lifestyle choice (a bad one)",
      "Reading the error message solves 80% of problems",
      "Turning it off and on again works surprisingly often",
      "Documentation written \"later\" is never written"
    ],
    quote: "Experience is what you get when you didn't get what you wanted"
  },

  statusPage: {
    statusHeader: {
      systemStatus: "ALL_SYSTEMS_OPERATIONAL",
      uptime: "99.99",
      lastIncident: "90+_DAYS_AGO"
    },
    systemStatus: [
      { name: "API Services", status: "OPERATIONAL" },
      { name: "Infrastructure", status: "OPERATIONAL" },
      { name: "Monitoring", status: "OPERATIONAL" },
      { name: "Automation", status: "OPERATIONAL" }
    ],
    passions: [
      "🔭 Observability & Monitoring",
      "🏗️ Infrastructure as Code",
      "🤖 Automation & DevOps",
      "🏠 Home Automation Projects"
    ],
    prometheus: {
      metrics: [
        { name: "Scrape Targets", value: "ALL_UP", color: "00FF00" },
        { name: "Ingestion Rate", value: "HIGH", color: "FF6B00" },
        { name: "Query Latency", value: "FAST", color: "00D9FF" },
        { name: "Alerting", value: "NONE_FIRING", color: "00FF94" },
        { name: "System Health", value: "OPERATIONAL", color: "00FF00" }
      ]
    },
    grafana: {
      dashboards: [
        { name: "Production", value: "ACTIVE", color: "00FF00" },
        { name: "Monitoring", value: "ACTIVE", color: "00FF00" },
        { name: "Analytics", value: "ACTIVE", color: "00FF00" },
        { name: "Visualization", value: "ACTIVE", color: "9D4EDD" },
        { name: "Data Sources", value: "CONNECTED", color: "00FFD9" }
      ]
    },
    homeLab: {
      quote: "My home is my staging environment. My family are my beta testers.",
      metrics: [
        { name: "ESP32 Devices", value: "A_LOT", color: "FF6B00" },
        { name: "Sensors", value: "DOZENS", color: "FFD700" },
        { name: "Smart Lights", value: "MANY", color: "FFD700" },
        { name: "Automations", value: "COUNTLESS", color: "9D4EDD" },
        { name: "MQTT Traffic", value: "VERY_HIGH", color: "FF00FF" },
        { name: "System Uptime", value: "ROCK_SOLID", color: "00FF00" },
        { name: "Monthly Incidents", value: "MINIMAL", color: "00D9FF" },
        { name: "Status", value: "ALL_SYSTEMS_GO", color: "00FF94" }
      ],
      waf: {
        value: "HIGH_(and_climbing!_📈)",
        color: "00FFD9"
      },
      principlesApplied: [
        { title: "Infrastructure as Code", description: "All configs version-controlled and deployable" },
        { title: "Automated Deployments", description: "OTA updates for all devices, zero manual flashing" },
        { title: "Blameless Postmortems", description: "When automations break, we learn (and protect WAF)" }
      ]
    },
    otherAdventures: [
      { title: "🔧 DIY Projects & Electronics", status: "🟡 In Progress", statusLabel: "Building custom sensors and smart devices" },
      { title: "🤝 Open Source Contributions", status: "🟢 Active", statusLabel: "Contributing to Home Assistant & ESPHome" }
    ],
    finalQuote: "If it's not automated, it's broken ⚡",
    footer: {
      tagline1: "This Footer is Also Monitored",
      tagline2: "99.9% Uptime (The .1% is nap time)",
      tagline3: "Dashboards All The Way Down",
      quote: "Building resilient systems at scale, one metric at a time"
    }
  }
};
