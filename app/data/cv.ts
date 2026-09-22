export const profile = {
  name: 'I\'m Araz',
  headline: 'Senior Software Engineer',
  tagline: 'Backend-focused engineer building production systems for maritime tech, cloud kitchens, and HR platforms.',
  location: 'Baku, Azerbaijan',
  email: 'araz.maharramli@gmail.com',
  linkedin: 'https://linkedin.com/in/araz-maharramli',
  linkedinLabel: 'linkedin.com/in/araz-maharramli',
  github: 'https://github.com/ArazMaharramli',
  githubLabel: 'github.com/ArazMaharramli',
  /** Portrait shown in the About hero. Drop the file at public/cv/portrait.jpg. */
  photo: '/cv/portrait.jpg',
  photoAlt: 'Araz Maharramli, Senior Software Engineer',
  summary:
    'Backend-focused Software Engineer with 5+ years of production experience delivering scalable systems across maritime tech, cloud kitchens, and HR platforms. Proven track record in system design, test engineering (98% line coverage), enterprise integrations (D365, Azure AD), and technical mentorship. Pursuing a PhD in Management Science & Engineering as a deliberate step toward Engineering Manager and CTO roles.'
}

export type Project = {
  name: string
  subtitle?: string
  link?: string
  linkLabel?: string
  /** Portrait cover shown on the project card (3:4 works best). */
  coverPhoto?: string
  /** Wide banner shown at the top of the project modal. Falls back to `image`. */
  bannerPhoto?: string
  live?: boolean
  highlights: string[]
  stack: string[],
  isFeatured?: boolean // Only these appear on the homepage
  order?: number // in this exact order.

}

export type Role = {
  company: string
  title: string
  period: string
  location: string
  description: string
  projects: Project[]
}

export const experience: Role[] = [
  {
    company: 'Novum LLC',
    title: 'Software Engineer (Tech Lead)',
    period: 'Feb 2020 — Present',
    location: 'Baku, AZ',
    description:
      'Leading backend development across multiple enterprise products as part of a 6-person engineering team. Responsible for system design, code quality, testing strategy, and junior/mid-level developer mentorship.',
    projects: [
      {
        name: 'Ship.Link',
        isFeatured: true,
        order: 0,
        subtitle: 'Real-time Vessel Chartering Platform',
        link: 'https://ship.link',
        linkLabel: 'ship.link',
        coverPhoto: '/projects/shiplink/cover.png',
        bannerPhoto: '/projects/shiplink/banner.png',
        highlights: [
          'Sole backend architect for a global vessel chartering platform — designed the system from the ground up, enabling vessel owners and charterers worldwide to discover, negotiate, and finalise charter agreements entirely online.',
          'Reduced charter agreement turnaround time via integrated digital signature and identity verification workflows, backed by a centralised OAuth2/OIDC authorization server (Duende IdentityServer) issuing SSO tokens across all microservices.',
          'Engineered advanced vessel search and matching algorithms that increased listing relevance and directly improved user conversion.',
          'Delivered a resilient, event-driven backend using Azure Service Bus and Redis caching, ensuring real-time responsiveness under concurrent load.',
          'Extended the platform with a dedicated geospatial microservice (NetTopologySuite) modelling maritime basins, trade zones, and shipping routes, integrated with the Seametrix API for port-to-port voyage calculations.',
          'Built a real-time messaging microservice using SignalR and Firebase push notifications, powering live chat, presence tracking, and deal-update alerts.',
          'Led the platform’s framework evolution from .NET 7 through to .NET 10 while maintaining production stability — demonstrating long-term ownership of the codebase.'
        ],
        stack: ['C#', '.NET 10', 'SQL Server (Azure SQL)', 'Redis', 'Azure Service Bus', 'SignalR', 'NetTopologySuite', 'Duende IdentityServer', 'Azure App Service', 'Azure Blob Storage']
      },
      {
        name: 'Kitopi',
        subtitle: 'Vendor Portal',
        coverPhoto: '/projects/kitopi-vendor-portal/cover.jpg',
        bannerPhoto: '/projects/kitopi-vendor-portal/banner.jpg',
        highlights: [
          'Led the architecture and design of a vendor statement management portal handling submissions of up to 10,000 line items per statement, with support for manual entry and bulk Excel import.',
          'Personally implemented the core snapshot/versioning system capturing the full state of every statement and its lines on each submission and decision event — the core technical challenge given the data volume involved.',
          'Built a real-time integration with Microsoft Dynamics 365 to push vendor statements post-submission and receive line-level decisions, enabling vendors to correct error lines and resubmit without losing history.',
          'Enforced architectural boundaries with a dedicated architecture-test suite and validated performance under load with k6-driven load tests against a mocked D365 endpoint.'
        ],
        stack: ['C#', '.NET 10', 'SQL Server', 'Microsoft Dynamics 365', 'Keycloak', 'Azure Service Bus', 'MediatR', 'xUnit', 'k6']
      },
      {
        name: 'Kitopi',
        subtitle: 'HR Employee Lifecycle Automation',
        coverPhoto: '/projects/kitopi-hr-lifecycle/cover.jpg',
        bannerPhoto: '/projects/kitopi-hr-lifecycle/banner.jpg',
        highlights: [
          'Built a serverless Azure Functions platform automating Kitopi’s employee lifecycle end-to-end — onboarding, offboarding, and profile updates — replacing manual HR data entry across five disconnected systems.',
          'Engineered dual HTTP + Azure Service Bus trigger paths for every sync operation, giving HR immediate feedback while guaranteeing eventual delivery and automatic retries.',
          'Orchestrated identity provisioning and deactivation through Microsoft Entra ID/Graph, alongside data sync to Adrenalin (HCM/payroll) and Dynamics 365 F&O, using OAuth2 client-credentials flows across three identity providers.',
          'Achieved 85% line / 80% branch test coverage across Functions, Services, and Validators using xUnit, Moq, and NSubstitute.',
          'Provisioned infrastructure as code (Bicep) and enforced code quality via StyleCop/analyzers with warnings treated as build errors.'
        ],
        stack: ['C#', '.NET 8', 'Azure Functions', 'SQL Server', 'Azure Service Bus', 'Microsoft Graph', 'Azure AD', 'Bicep', 'xUnit']
      },
      {
        name: 'Kitopi',
        subtitle: 'Enterprise Middleware API',
        coverPhoto: '/projects/kitopi-middleware/cover.jpg',
        bannerPhoto: '/projects/kitopi-middleware/banner.jpg',
        highlights: [
          'Eliminated data inconsistencies across Kitopi’s enterprise ecosystem by designing a middleware API layer that unified synchronisation between multiple third-party platforms via REST and Azure Service Bus.',
          'Raised test confidence to 98% line coverage and 92% branch coverage across all modules — enabling the team to ship faster with significantly fewer production regressions.',
          'Levelled up 3 engineers (2 junior, 1 mid) through structured code reviews, architecture sessions, and hands-on mentorship, reducing PR review cycles by improving first-submission quality.'
        ],
        stack: ['C#', '.NET 8', 'SQL Server', 'Azure Service Bus', 'xUnit', 'NUnit']
      },
      {
        name: 'Azal ESS',
        isFeatured: true,
        order: 2,
        subtitle: 'Airline HR Self-Service Platform',
        coverPhoto: '/projects/azal-ess/cover.jpg',
        bannerPhoto: '/projects/azal-ess/banner.jpg',
        highlights: [
          'Delivered a full HR self-service platform for Azerbaijan Airlines from scratch — digitising leave requests, timesheets, business trips, salary slips, and team management for the entire organisation.',
          'Designed the system on Clean Architecture with CQRS (MediatR), and implemented a transactional Outbox pattern to guarantee reliable, at-least-once event delivery into the Dynamics 365 ERP sync pipeline.',
          'Integrated Microsoft OAuth2 (Azure AD) for enterprise SSO across the organisation.',
          'Established the project’s E2E testing culture using Playwright, backed by a WireMock-based stub server simulating the Dynamics 365 API.'
        ],
        stack: ['C#', '.NET 10', 'SQL Server', 'Azure AD', 'OAuth2', 'Microsoft Dynamics 365', 'MediatR', 'xUnit', 'Playwright', 'WireMock']
      },
      {
        name: 'Pasha Holding',
        subtitle: 'Portfolio Financial Reporting Platform (PMC BI)',
        coverPhoto: '/projects/pasha-pmc/cover.jpg',
        bannerPhoto: '/projects/pasha-pmc/banner.jpg',
        highlights: [
          'Took ownership of Pasha Holding’s portfolio financial-reporting platform, leading its architecture refactor and continued feature delivery for group-wide BI reporting.',
          'Redesigned the service layer around constructor injection and centralised middleware-based validation, replacing ad-hoc validation logic.',
          'Migrated the platform to .NET 10 while shipping the submission-approval workflow, giving finance teams visibility over each portfolio company’s report lifecycle.',
          'Worked within a report-type-specific Excel parser architecture unified behind a factory/orchestrator pattern, backed by Azure AD SSO and Azure Blob Storage.'
        ],
        stack: ['C#', 'ASP.NET Core MVC', '.NET 10', 'SQL Server', 'Azure AD', 'Azure Blob Storage', 'ClosedXML', 'AutoMapper', 'FluentValidation']
      }
    ]
  }
]

export const personalProjects: Project[] = [
  {
    name: 'RoomMate.az',
    isFeatured: true,
    order: 1,
    subtitle: 'Founder & Engineer — Live roommate/flat-sharing marketplace (2020 — Present)',
    link: 'https://roommate.az',
    linkLabel: 'roommate.az',
    coverPhoto: '/projects/roommate/cover.png',
    bannerPhoto: '/projects/roommate/banner.jpg',
    highlights: [
      'Founded and built RoomMate, a live roommate/flat-sharing classifieds platform for the Azerbaijani market, running continuously since 2020 with real paying users.',
      'Designed the core marketplace: listings with rich filtering, a favourites system, and a full admin back-office — fully localised across Azerbaijani, English, and Russian.',
      'Built a monetisation layer with VIP/Premium paid listing boosts, scheduled promotions, and a Telegram bot auto-syndicating listings for organic reach.',
      'Operated the platform in production with New Relic APM and Google Analytics for observability, on a self-managed Docker Compose deployment.',
      'Leading an in-progress rewrite of the backend to a .NET 8 modular monolith using CQRS (MediatR) and a custom in-house event bus.'
    ],
    stack: ['PHP (Laravel 10)', 'Vue 2/Nuxt 2', 'MySQL', 'Redis', 'Laravel Passport', 'Docker', 'New Relic', '.NET 8 rewrite', 'PostgreSQL', 'MediatR']
  },
  {
    name: 'Media Gallery',
    isFeatured: true,
    order: 3,
    subtitle: 'Creator & Engineer — Self-hostable media platform (Mar 2026)',
    link: 'https://media.arazsolutions.com',
    linkLabel: 'media.arazsolutions.com',
    coverPhoto: '/projects/media-gallery/cover.jpg',
    bannerPhoto: '/projects/media-gallery/banner.jpg',
    highlights: [
      'Designed and built a self-hostable media-sharing platform for event photographers, letting guests view and upload photos/videos via QR-coded, permission-scoped links with zero user accounts required.',
      'Implemented resumable, chunked uploads (2MB–10GB) using the TUS protocol with disk-persisted upload state — uploads survive server restarts and network drops.',
      'Built dual transcoding pipelines generating next-gen and fallback formats (WebP/JPEG via Sharp; WebM/VP9 and MP4/H.264 via FFmpeg), plus a media approval/moderation workflow.',
      'Architected the app around vertical-slice architecture with a swappable storage abstraction (local filesystem now, S3-ready), hardened against path-traversal and MIME-spoofing.',
      'Fully containerised (multi-stage Docker build, Compose orchestration with PostgreSQL) for one-command self-hosted deployment.'
    ],
    stack: ['TypeScript', 'Nuxt 3/Nitro', 'Vue 3', 'PostgreSQL', 'Prisma', 'TUS', 'Sharp', 'FFmpeg', 'Docker']
  }
]

export const selectedProjects: Project[] = [
  ...personalProjects,
  ...experience.flatMap((role) => role.projects)
].map((project) => ({ ...project, live: true }))

export const featuredProjects: Project[] =  selectedProjects.filter((project) => project.isFeatured)
.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export type EducationEntry = {
  degree: string
  institution: string
  period: string
  location: string
  note?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'PhD — Management Science & Engineering',
    institution: 'China University of Geosciences',
    period: 'Sep 2025 — Present',
    location: 'Beijing, CN',
    note: 'Focused on engineering leadership, technology management, and organisational strategy — a deliberate step toward Engineering Manager and CTO roles.'
  },
  {
    degree: 'MSc — Computer Science',
    institution: 'Beijing University of Technology',
    period: 'Sep 2020 — Jul 2023',
    location: 'Beijing, CN'
  },
  {
    degree: 'BSc — Computer Engineering',
    institution: 'Azerbaijan Technical University',
    period: 'Sep 2015 — Jul 2019',
    location: 'Baku, AZ'
  }
]

export type SkillGroup = { category: string; items: string[] }

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['C#', 'JavaScript', 'SQL', 'TypeScript'] },
  { category: 'Frameworks', items: ['.NET 8/9/10', 'ASP.NET Core', 'Vue.js'] },
  { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'Redis'] },
  { category: 'Cloud', items: ['Azure App Service', 'Azure Service Bus', 'Azure Blob Storage', 'Azure AD'] },
  { category: 'Testing', items: ['xUnit', 'NUnit', 'Playwright', '98% line / 92% branch coverage'] },
  { category: 'DevOps', items: ['CI/CD pipelines', 'Docker', 'Nginx', 'Git'] },
  { category: 'Integrations', items: ['Microsoft Dynamics 365', 'OAuth2', 'REST APIs', 'Message Queues'] },
  { category: 'Architecture', items: ['Clean Architecture', 'Microservices', 'Event-driven design', 'RBAC'] }
]

export const languages = [
  { name: 'Azerbaijani', level: 'Native' },
  { name: 'English', level: 'B2 — Professional working proficiency' },
  { name: 'Chinese', level: 'HSK3 — Elementary proficiency' }
]
