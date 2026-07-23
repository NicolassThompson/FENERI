import {
  NavItem,
  IndicatorItem,
  ValueCardItem,
  ProjectItem,
  EventItem,
  PartnerItem,
  GalleryItem,
  FAQItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Valores", href: "#misvisval" },
  { label: "Indicadores", href: "#indicadores" },
  { label: "Projetos", href: "#projetos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Parcerias", href: "#parcerias" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

export const INSTITUTIONAL_INDICATORS: IndicatorItem[] = [
  {
    id: "eneris",
    value: 150,
    suffix: "+",
    label: "Entidades Filiadas",
    description: "Centros e Diretórios Acadêmicos articulados nacionalmente.",
  },
  {
    id: "estados",
    value: 27,
    suffix: "",
    label: "Unidades da Federação",
    description: "Presença em todas as regiões do Brasil e DF.",
  },
  {
    id: "eventos",
    value: 40,
    suffix: "+",
    label: "Eventos Realizados",
    description: "Congressos, encontros e fóruns diplomáticos acadêmicos.",
  },
  {
    id: "anos",
    value: 25,
    suffix: " anos",
    label: "De História e Atuação",
    description: "Representando os estudantes de RI no cenário global.",
  },
];

export const VALUES_CARDS: ValueCardItem[] = [
  {
    id: "missao",
    title: "Nossa Missão",
    description:
      "Integrar, representar e fortalecer a comunidade de estudantes e profissionais de Relações Internacionais no Brasil, promovendo excelência acadêmica e inserção diplomática.",
    iconName: "Compass",
  },
  {
    id: "visao",
    title: "Nossa Visão",
    description:
      "Ser a principal entidade de representação estudantil em Relações Internacionais da América Latina, reconhecida pela liderança, inovação e impacto nas políticas públicas de ensino.",
    iconName: "Globe",
  },
  {
    id: "valores",
    title: "Nossos Valores",
    description:
      "Diplomacia ativa, pluralismo de ideias, transparência institucional, compromisso com a ética internacional e defesa irrestrita da educação de qualidade.",
    iconName: "ShieldCheck",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "eneri",
    title: "Encontro Nacional dos Estudantes de RI (ENERI)",
    category: "Congresso Nacional",
    description:
      "O maior evento de Relações Internacionais da América Latina, reunindo anualmente milhares de congressistas, embaixadores e acadêmicos renomados.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Saiba mais sobre o ENERI",
    ctaLink: "#eventos",
  },
  {
    id: "revista",
    title: "Revista Científica FENERI",
    category: "Publicação Acadêmica",
    description:
      "Periódico com avaliação entre pares focado em publicação de artigos originais, resenhas e ensaios inéditos produzidos por estudantes de graduação e pós.",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Acessar Edições",
    ctaLink: "#",
  },
  {
    id: "embaixadores",
    title: "Programa de Embaixadores Universitários",
    category: "Liderança",
    description:
      "Rede de representantes oficiais da FENERI dentro de universidades públicas e privadas em todo o território nacional.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Seja um Embaixador",
    ctaLink: "#",
  },
  {
    id: "carreiras",
    title: "Feira de Carreiras Globais & Diplomacia",
    category: "Desenvolvimento Profissional",
    description:
      "Conexão direta entre estudantes de RI, organismos internacionais, ONGs globais, multinacionais e carreiras do Serviço Exterior Brasileiro.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Ver Oportunidades",
    ctaLink: "#",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: "eneri-2026",
    title: "XXIX ENERI 2026 — Edição Nacional",
    date: "15 a 18 de Outubro de 2026",
    location: "Brasília / DF — Centro de Convenções Ulysses Guimarães",
    description:
      "Quatro dias de imersão total com minicursos, simulações da ONU, palestras diplomáticas e apresentação de trabalhos acadêmicos.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Inscreva-se Agora",
    ctaLink: "#",
  },
  {
    id: "forum-geopolitica",
    title: "Fórum Diplomacia Jovem & Transição Energética",
    date: "28 de Novembro de 2026",
    location: "São Paulo / SP & Transmissão Online",
    description:
      "Debate multilateral focado na cooperação internacional para sustentabilidade, clima e inovação diplomática no Sul Global.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Garantir Vaga",
    ctaLink: "#",
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "mre",
    name: "Ministério das Relações Exteriores (Itamaraty)",
    logoUrl: "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "https://www.gov.br/mre",
  },
  {
    id: "abri",
    name: "Associação Brasileira de Relações Internacionais (ABRI)",
    logoUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "#",
  },
  {
    id: "unesco",
    name: "UNESCO Brasil",
    logoUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "#",
  },
  {
    id: "onu",
    name: "UNIC Rio — Nações Unidas Brasil",
    logoUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "#",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cerimônia de Abertura do ENERI",
    caption: "Discurso institucional perante mais de 2.000 congressistas.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    category: "Eventos",
  },
  {
    id: "gal-2",
    title: "Mesa Redonda Diplomática",
    caption: "Embaixadores e diplomatas discutindo política externa.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    category: "Painéis",
  },
  {
    id: "gal-3",
    title: "Simulação de Organismo Internacional",
    caption: "Estudantes atuando como delegados em comitê de crises.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    category: "Academico",
  },
  {
    id: "gal-4",
    title: "Assembleia Geral da FENERI",
    caption: "Votação das diretrizes nacionais com os Centros Acadêmicos.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "Assembleia",
  },
  {
    id: "gal-5",
    title: "Workshop de Negociação Internacional",
    caption: "Treinamento de soft skills para carreiras globais.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    category: "Capacitação",
  },
  {
    id: "gal-6",
    title: "Entrega do Prêmio FENERI de Pesquisa",
    caption: "Reconhecimento dos melhores trabalhos de conclusão de curso.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "Prêmios",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é a FENERI?",
    answer:
      "A FENERI (Federação Nacional dos Estudantes de Relações Internacionais do Brasil) é a entidade máxima de representação estudantil do curso de Relações Internacionais no país. Atuamos integrando Centros e Diretórios Acadêmicos, promovendo eventos acadêmicos de abrangência nacional e defendendo os interesses da categoria junto aos órgãos de ensino e ao mercado.",
  },
  {
    id: "faq-2",
    question: "Como nossa entidade estudantil (CA/DA) pode se filiar?",
    answer:
      "A filiação é aberta a todos os Centros Acadêmicos e Diretórios Acadêmicos regularmente constituídos em cursos de Relações Internacionais no Brasil. Basta entrar em contato com nossa Secretaria de Relações Internas e preencher a Ficha Institucional de Aderência.",
  },
  {
    id: "faq-3",
    question: "Quem pode participar dos eventos da FENERI como o ENERI?",
    answer:
      "Os eventos da FENERI são abertos a todos os estudantes de graduação, pós-graduação, professores, pesquisadores e profissionais graduados em Relações Internacionais ou áreas correlatas (Direito, Economia, Ciência Política, Comércio Exterior, etc.).",
  },
  {
    id: "faq-4",
    question: "A FENERI emite certificados com horas complementares?",
    answer:
      "Sim. Todos os congressos, cursos, workshops e painéis organizados pela FENERI oferecem certificados digitais autenticados com carga horária reconhecida para aproveitamento acadêmico nas universidades.",
  },
  {
    id: "faq-5",
    question: "Como entrar em contato com a Diretoria Executiva?",
    answer:
      "Você pode enviar uma mensagem diretamente através do formulário institucional no rodapé desta página ou encaminhar um e-mail para contato@feneri.org.br. Nossa equipe responde em até 48 horas úteis.",
  },
];
