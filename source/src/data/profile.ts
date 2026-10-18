// All portfolio content lives here. Edit this file to change copy, roles,
// stack or figures — no markup changes needed.

export const flags = {
  showFigures: true,
  showProjects: true,
  showScanlines: true,
};

export const site = {
  title: 'Giuseppe Damasin — Senior Full-Stack & AWS Engineer',
  description:
    'Senior full-stack engineer who also owns the AWS infrastructure underneath. 5+ years building SaaS platforms, microservices and cloud infrastructure for US companies. Open to remote roles.',
  url: 'https://bludvikk.github.io/porfolio/',
};

export const contact = {
  email: 'ga.damasin@gmail.com',
  linkedin: 'https://linkedin.com/in/gidamvlad',
  linkedinLabel: 'linkedin.com/in/gidamvlad',
  resume: 'Giuseppe_Damasin_Resume.pdf',
};

export const hud = {
  tag: 'GD//03',
  status: 'Status: open to remote',
  nav: [
    { href: '#mission', label: '[01] Mission' },
    { href: '#contracts', label: '[02] Contracts' },
    { href: '#loadout', label: '[03] Loadout' },
    { href: '#contact', label: '[>] Contact', accent: true },
  ],
};

export const hero = {
  kicker: '> Operator file loaded_',
  firstName: 'Giuseppe',
  lastName: 'Damasin',
  taglineBefore: 'Senior full-stack engineer who also owns the ',
  taglineHighlight: 'AWS infrastructure',
  taglineAfter: ' underneath.',
  idCard: {
    id: 'ID // GAD-2021',
    badge: '▲ Verified',
    rows: [
      ['Class', 'Full-stack / Cloud'],
      ['Base', 'Manila, PH · GMT+8'],
      ['Uptime', '5+ years'],
      ['Cert', 'CCNA · TOPCIT L4'],
      ['Mode', 'Remote'],
    ],
  },
};

export const figures = [
  { label: 'Legacy → SaaS GA', value: '8 MO' },
  { label: 'Perf. gains shipped', value: '60–80%' },
  { label: 'Prod jobs monitored', value: '54' },
  { label: 'Microservices refactored', value: '20+' },
];

export const mission = {
  label: '[01] // Mission log — featured',
  meta: 'Surepoint Technologies · Austin TX · Remote · 06.2023 – 01.2025',
  op: 'Op: Coyote Practice Management (CPM)',
  headline: 'Desktop monolith → cloud SaaS.',
  headlineAccent: 'GA in 8 months.',
  lead: 'I led the move of Coyote Analytics, a monolithic Windows application for legal and consulting firms, to a cloud platform. I also led the team that shipped it.',
  boxes: [
    {
      title: '// Problem',
      body: 'The product was a single-tenant desktop app that firms installed and maintained themselves. The business needed a multi-tenant cloud platform without losing existing customers.',
    },
    {
      title: '// What I owned',
      body: 'Architecture decisions, CI/CD pipelines and cloud deployment standards. I also ran code reviews, sprint planning and mentorship.',
    },
    {
      title: '// Team',
      body: 'I led a distributed team of engineers from Hitachi and Macrosoft across India and Pakistan, working to one architecture and one release process.',
    },
  ],
  results: [
    { value: '8 MO', label: 'Kickoff to General Availability', accent: true },
    { value: '80%', label: 'Faster than the legacy app' },
    { value: '2', label: 'Vendor teams (Hitachi, Macrosoft) run as one' },
  ],
};

export const contracts = {
  label: '[02] // Previous contracts',
  roles: [
    {
      company: 'PayLink Payment Plans',
      years: '2025–26',
      title: 'AWS Infrastructure Engineer',
      summary:
        'Owned production AWS for a payment-plan provider: about 28 EC2 instances, ECS and Aurora across three business platforms.',
      bullets: [
        'Moved certificates to auto-renewing ACM on 13 load balancer listeners',
        'Built a daily digest of 54 scheduled jobs. It caught a nightly ECS job that had been failing silently.',
        'Closed public database exposure and planned a VPC migration in CloudFormation',
      ],
    },
    {
      company: 'Floor & Decor',
      years: '2025',
      title: 'Senior Software Engineer',
      summary: 'Built SVES, a Java Spring Boot service that generates the nightly XML product catalogs.',
      bullets: [
        'Cut run time by 60%, to 12 minutes against a 30-minute target',
        'Writes 97,000+ product records to PostgreSQL in 10 minutes',
        'Produces a 2 GB compressed catalog and uploads it over SFTP in 2 minutes',
      ],
    },
    {
      company: 'Stack Education Technologies',
      years: '2022–23',
      title: 'Software Developer',
      summary: 'Worked on school management software covering registrar, onboarding, library and cashier.',
      bullets: [
        'Refactored 20+ fragmented microservices into a maintainable architecture',
        'Built reports that combine student and payment data from several databases',
      ],
    },
    {
      company: 'The Bored Guys Inside Solutions',
      years: '2021',
      title: 'Full-Stack Developer',
      summary: 'Started and built Empire Core, a SaaS platform for warehousing, product catalogs and analytics.',
      bullets: ['Built with NestJS and React', 'Replaced legacy WinForms reports with drag-and-drop reporting'],
    },
  ],
};

export const loadout = {
  label: '[03] // Loadout',
  stack: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'React Native', 'Flutter', 'SwiftUI'] },
    { category: 'Backend', items: ['Java Spring Boot', 'Node.js', 'NestJS', 'GraphQL', 'REST'] },
    { category: 'Data', items: ['PostgreSQL', 'MySQL', 'Aurora', 'Supabase'] },
    {
      category: 'AWS',
      highlight: true,
      items: ['EC2', 'ECS', 'Lambda', 'Step Functions', 'EventBridge', 'SES', 'ACM', 'ELB', 'VPC', 'WAF', 'CloudFormation'],
    },
    { category: 'Ops', items: ['IaC', 'CI/CD', 'Docker', 'Linux', 'Networking', 'Monitoring', 'PCI readiness'] },
  ],
  education: [
    { title: 'BS Information Technology', detail: 'Univ. of the Immaculate Conception, Davao · 2021 · GPA 3.5' },
    { title: 'TOPCIT Level 4', detail: 'Test of Practical Competency in IT' },
    { title: 'Cisco CCNA', detail: 'Cisco Certified Network Associate' },
  ],
  sideOps: {
    label: '// Side ops',
    // **bold** segments are rendered as <strong>
    text: 'I also build mobile apps. **Chair Yoga for All** (SwiftUI) is live on the App Store. Others include **Farm Connect** (Flutter, Supabase), **FitFrail** (React Native) and **CricCoach AI** (Flutter, computer vision).',
  },
};

export const footer = {
  label: '[>] // Open channel',
  headline: 'Hiring remote?',
  headlineAccent: "Let's talk.",
  copyright: '© 2026 Giuseppe Adams Damasin',
  eof: 'End of file_',
};
