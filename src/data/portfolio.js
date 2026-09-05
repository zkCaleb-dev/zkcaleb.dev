// Fuente única de contenido del portfolio. Edita ESTE archivo para actualizar
// perfil, conocimientos, proyectos y formación. Los updates de cada proyecto
// viven en src/content/updates/<slug>/*.md (uno por publicación).
export const profile = {
  name: 'Caleb Loría',
  handle: 'zkCaleb-dev',
  github: 'https://github.com/zkCaleb-dev',
  hero: {
    es: 'Desarrollador backend y de contratos inteligentes. Construyo infraestructura sobre la blockchain de Stellar con Go, TypeScript y SQL.',
    en: 'Backend and smart contract developer. I build infrastructure on the Stellar blockchain with Go, TypeScript and SQL.',
  },
  chips: ['Golang', 'TypeScript', 'SQL', 'Stellar / Soroban'],
};

export const skills = [
  { name: 'Golang',
    es: 'Servicios backend, APIs REST y sistemas de larga ejecución. Lenguaje principal para infraestructura.',
    en: 'Backend services, REST APIs and long-running systems. Primary language for infrastructure.' },
  { name: 'TypeScript',
    es: 'Aplicaciones web y tooling. Del servidor al cliente con tipado estricto.',
    en: 'Web applications and tooling. Server to client with strict typing.' },
  { name: 'SQL / Postgres',
    es: 'Modelado de datos, migraciones y consultas sobre historiales grandes.',
    en: 'Data modeling, migrations and queries over large histories.' },
  { name: 'Stellar / Soroban',
    es: 'Contratos inteligentes, SAC, eventos y trustlines. Mi especialidad dentro del ecosistema.',
    en: 'Smart contracts, SAC, events and trustlines. My specialty within the ecosystem.' },
];

// Cada proyecto: slug (URL /projects/<slug>), descripción corta (es/en) para la
// tarjeta, y sección rica: role, highlights y links para la página del proyecto.
export const projects = [
  {
    slug: 'sierpe', name: 'Sierpe', tag: 'Go · Stellar · Postgres',
    url: 'https://github.com/zkCaleb-dev/sierpe', urlLabel: 'github.com/zkCaleb-dev/sierpe',
    es: 'Indexador de Stellar autoalojado: registra los contratos que te interesan y guarda su historial completo — eventos, estado, transferencias de tokens y trustlines — en tu propio Postgres, detrás de una API REST y una UI integrada.',
    en: 'Self-hosted Stellar indexer: register the contracts you care about and keep their complete history — events, state, token transfers and trustlines — in your own Postgres, behind a REST API and a built-in UI.',
    role: {
      es: 'Proyecto propio — diseño y desarrollo completo.',
      en: 'Personal project — full design and development.',
    },
    highlights: {
      es: [
        'Historial completo por contrato: eventos, estado, transferencias de tokens y trustlines.',
        'Indexa todos los movimientos de tokens en los que participa un contrato, sin importar quién los emitió.',
        'API REST + UI integrada sobre tu propio Postgres — tus datos, tu infraestructura.',
        'Cobertura por tipo de dato: sabés exactamente qué está indexado y qué falta.',
      ],
      en: [
        'Complete per-contract history: events, state, token transfers and trustlines.',
        'Indexes every token movement a contract participates in, regardless of issuer.',
        'REST API + built-in UI over your own Postgres — your data, your infrastructure.',
        'Per-data-type coverage reporting: know exactly what is indexed and what is missing.',
      ],
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/zkCaleb-dev/sierpe' },
    ],
  },
  {
    slug: 'trustlesswork', name: 'TrustlessWork', tag: 'Soroban · Rust · USDC',
    url: 'https://www.trustlesswork.com', urlLabel: 'trustlesswork.com',
    es: 'Escrow-as-a-Service sobre Stellar: infraestructura de depósitos en garantía no custodiales con hitos, aprobaciones y disputas para pagos en stablecoins. Desarrollador de contratos inteligentes del equipo.',
    en: 'Escrow-as-a-Service on Stellar: non-custodial escrow infrastructure with milestones, approvals and disputes for stablecoin payments. Smart contract developer on the team.',
    role: {
      es: 'Desarrollador de contratos inteligentes (Soroban / Rust) del equipo.',
      en: 'Smart contract developer (Soroban / Rust) on the team.',
    },
    highlights: {
      es: [
        'Escrows no custodiales sobre Stellar: los fondos viven en el contrato, no en un tercero.',
        'Hitos, aprobaciones y disputas para pagos en stablecoins (USDC).',
        'API para que cualquier producto integre depósitos en garantía sin escribir contratos.',
      ],
      en: [
        'Non-custodial escrows on Stellar: funds live in the contract, not with a third party.',
        'Milestones, approvals and disputes for stablecoin (USDC) payments.',
        'An API so any product can integrate escrow without writing contracts.',
      ],
    },
    links: [
      { label: 'trustlesswork.com', url: 'https://www.trustlesswork.com' },
    ],
  },
  {
    slug: 'siga', name: 'SIGA', tag: 'Web · TypeScript · SQL',
    url: '', urlLabel: '',
    es: 'Aplicación web para la gestión de notas de estudiantes, pensada para colegios costarricenses: registro académico, calificaciones y reportes.',
    en: 'Web application for managing student grades, built for Costa Rican schools: academic records, grading and reports.',
    role: {
      es: 'Proyecto propio — diseño y desarrollo completo.',
      en: 'Personal project — full design and development.',
    },
    highlights: {
      es: [
        'Registro académico, calificaciones y reportes en un solo lugar.',
        'Pensado para la realidad de los colegios costarricenses.',
      ],
      en: [
        'Academic records, grading and reports in one place.',
        'Built around how Costa Rican schools actually work.',
      ],
    },
    links: [],
  },
];

export const education = [
  { period: '2021 — 2025', title: '[ Tu titulación aquí ]', sub: 'Institución · edita portfolio.js' },
  { period: '2023', title: '[ Certificación o curso ]', sub: 'Plataforma o entidad · edita portfolio.js' },
];
