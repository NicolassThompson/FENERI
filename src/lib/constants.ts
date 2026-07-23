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
  { label: "Missão & Valores", href: "#misvisval" },
  { label: "CONERI", href: "#coneri" },
  { label: "Carteirinha", href: "#carteirinha" },
  { label: "Projetos", href: "#projetos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Parceiros", href: "#parcerias" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

export const INSTITUTIONAL_INDICATORS: IndicatorItem[] = [
  {
    id: "ceris",
    value: 150,
    suffix: "+",
    label: "CERIs Filiados",
    description: "Centros e Diretórios Acadêmicos articulados pelo CONERI em todo o país.",
  },
  {
    id: "edicoes-eneri",
    value: 28,
    suffix: "ª",
    label: "Edição do ENERI",
    description: "Tradição em grandes encontros nacionais da comunidade internacionalista.",
  },
  {
    id: "estados",
    value: 27,
    suffix: "",
    label: "Unidades da Federação",
    description: "Representatividade nacional unificada com rodízio entre 5 regiões.",
  },
  {
    id: "desconto-max",
    value: 80,
    suffix: "%",
    label: "Descontos Exclusivos",
    description: "Benefícios com a Carteirinha Nacional do Estudante Internacionalista.",
  },
];

export const VALUES_CARDS: ValueCardItem[] = [
  {
    id: "missao",
    title: "Missão",
    description:
      "Representar os estudantes de Relações Internacionais do Brasil e defender seus interesses no âmbito nacional, além de realizar a promoção contínua da área das Relações Internacionais.",
    iconName: "Compass",
  },
  {
    id: "visao",
    title: "Visão",
    description:
      "Ser uma organização de referência para as relações internacionais e para os movimentos estudantis da área e do país, integrando a academia, a diplomacia e a sociedade.",
    iconName: "Globe",
  },
  {
    id: "valores",
    title: "Valores",
    description:
      "Igualdade • Respeito • Transparência • Empoderamento • Liderança • Colaboração • Voluntariado. Princípios que regem todas as ações da Federação.",
    iconName: "ShieldCheck",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "carteirinha",
    title: "Carteirinha Nacional do Estudante Internacionalista (CNIE)",
    category: "Benefícios & Documento Oficial",
    description:
      "Documento oficial com QR Code vinculado à base de dados nacional (Lei 12.933/2013). Garante meia-entrada em cinemas e shows, além de descontos de 10% a 80% nos parceiros da FENERI (Vocação Diplomata, What's Rel?, Mission Abroad). Apenas R$ 30,00 com repasse direto para o seu CA/DA e ações sociais.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Solicitar Carteirinha",
    ctaLink: "#carteirinha",
  },
  {
    id: "eneri",
    title: "Encontro Nacional de Estudantes de RI (ENERI)",
    category: "Encontro Acadêmico Nacional",
    description:
      "O maior evento de estudantes de Relações Internacionais da América Latina. Reúne anualmente congressistas de todo o Brasil com palestras de diplomatas renomados, apresentações de trabalhos acadêmicos, festas e a realização do primeiro CONERI do ano.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Saiba Mais sobre o ENERI",
    ctaLink: "#eventos",
  },
  {
    id: "coneri",
    title: "Conselho Nacional de Estudantes de RI (CONERI)",
    category: "Deliberação & Governança",
    description:
      "Órgão de representação dos estudantes dentro da FENERI, com função deliberativa, consultiva e fiscalizadora. Reúne-se 3 vezes ao ano respeitando o rodízio de regiões para propor alterações no Estatuto, homologar gestões e avaliar contas da Federação.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Conhecer o CONERI",
    ctaLink: "#coneri",
  },
  {
    id: "revista-anais",
    title: "Revista FENERI & Anais do ENERI",
    category: "Publicações Científicas",
    description:
      "Acesso ao acervo histórico de artigos acadêmicos, ensaios e resenhas publicados pela comunidade de estudantes e jovens pesquisadores de Relações Internacionais do Brasil.",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Acessar Publicações",
    ctaLink: "#",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: "eneri-oficial",
    title: "XXVIII ENERI — Encontro Nacional de Estudantes de RI",
    date: "Evento Anual Nacional",
    location: "Sede votada no CONERI anterior (Rodízio de Regiões)",
    description:
      "Palestras com diplomatas e internacionalistas renomados, grupos de trabalho acadêmicos, reuniões deliberativas do CONERI e integração cultural dos estudantes do Brasil.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Garantir Inscrição com Desconto",
    ctaLink: "#",
  },
  {
    id: "coneri-niterói",
    title: "Reuniões Ordinárias do CONERI",
    date: "3 Edições por Ano",
    location: "Regiões Norte, Sul, Nordeste, Sudeste e Centro-Oeste",
    description:
      "Espaço democrático onde qualquer estudante de Relações Internacionais tem voz para fomentar debates, propor reformas estatutárias e avaliar a gestão da FENERI.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Consultar Calendário de Reuniões",
    ctaLink: "#",
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: "vocacao-diplomata",
    name: "Vocação Diplomata — Preparatório CACD",
    logoUrl: "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "https://www.vocacaodiplomata.com.br",
  },
  {
    id: "whats-rel",
    name: "What's Rel? — O Portal do Internacionalista",
    logoUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "https://whatsrel.com.br",
  },
  {
    id: "mission-abroad",
    name: "Mission Abroad — Oportunidades Internacionais",
    logoUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "https://missionabroad.org",
  },
  {
    id: "eneri-parceiros",
    name: "Rede de CAs e DAs Filiados (CONERI)",
    logoUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=400&auto=format&fit=crop",
    websiteUrl: "#",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cerimônia do ENERI",
    caption: "Abertura oficial perante mais de 2.000 congressistas.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    category: "Eventos",
  },
  {
    id: "gal-2",
    title: "Mesa Redonda Diplomática",
    caption: "Diplomatas e acadêmicos debatendo política externa.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    category: "Painéis",
  },
  {
    id: "gal-3",
    title: "Reunião Plenária do CONERI",
    caption: "Estudantes e delegados votando pautas do movimento estudantil.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    category: "CONERI",
  },
  {
    id: "gal-4",
    title: "Assembleia Geral da FENERI",
    caption: "Deliberações com Centros e Diretórios Acadêmicos.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    category: "Assembleia",
  },
  {
    id: "gal-5",
    title: "Workshop de Negociação",
    caption: "Treinamento prático de soft skills e diplomacia corporativa.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    category: "Capacitação",
  },
  {
    id: "gal-6",
    title: "Apresentações de Trabalhos Acadêmicos",
    caption: "Estudantes apresentando pesquisas e artigos científicos.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "Pesquisa",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é a FENERI?",
    answer:
      "A Federação Nacional de Estudantes de Relações Internacionais do Brasil (FENERI) é a entidade geral de representação das e dos estudantes de graduação de Relações Internacionais em todo o Brasil.",
  },
  {
    id: "faq-2",
    question: "O que é e como funciona o CONERI?",
    answer:
      "O Conselho Nacional dos Estudantes de Relações Internacionais (CONERI) é o órgão de representação dos estudantes dentro da FENERI, com função predominantemente deliberativa, consultiva e fiscalizadora. É formado pela união dos CAs/DAs filiados e reúne-se 3 vezes ao ano em diferentes regiões do país.",
  },
  {
    id: "faq-3",
    question: "Quais são as vantagens da Carteirinha Nacional do Estudante Internacionalista?",
    answer:
      "Além da garantia de meia-entrada assegurada pela Lei 12.933/2013, o portador tem descontos de 10% a 80% nos serviços dos parceiros oficiais da FENERI (Vocação Diplomata, What's Rel?, Mission Abroad) e valores reduzidos no ENERI e demais eventos oficiais. Custando apenas R$ 30,00 sem frete adicional, parte do valor é destinada ao seu CA/DA e a projetos de ação social.",
  },
  {
    id: "faq-4",
    question: "Como o meu Centro Acadêmico (CA/DA) pode se filiar à FENERI?",
    answer:
      "Entidades de representação estudantil de cursos de Relações Internacionais regularly constituídas podem se filiar enviando a ficha de regularização à Diretoria da FENERI. Ao se filiar, o CA/DA ganha direito a voto no CONERI e recebe repasses financeiros diretos de cada carteirinha emitida por seus alunos.",
  },
  {
    id: "faq-5",
    question: "Quem tem direito a voz e voto nas reuniões do CONERI?",
    answer:
      "Nas reuniões do CONERI, qualquer estudante de Relações Internacionais, organização legítima ou Membro Consultivo tem direito a voz. O voto é exercido pelos representantes credenciados dos CAs e DAs filiados e regulares.",
  },
];
