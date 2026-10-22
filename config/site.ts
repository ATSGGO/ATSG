/**
 * Configurações editáveis do site.
 * Preencha os campos vazios quando a equipe tiver os dados definitivos.
 */
export const SITE = {
  name: 'ATSG',
  slogan: 'Tecnologia que impulsiona o seu negócio',
  year: 2026,

  /** E-mail institucional exibido na seção de contato. */
  contactEmail: 'atsgsolucoes@gmail.com',

  /**
   * WhatsApp que recebe as mensagens do formulário (via wa.me).
   * Somente dígitos, com DDI e DDD. Exemplo: '5562999999999'
   */
  whatsappNumber: '5562985548844',
} as const;

export type NavItem = { label: string; href: `#${string}` };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Equipe', href: '#equipe' },
  // { label: 'Portfólio', href: '#portfolio' }, // reativar junto com a seção em App.tsx
  { label: 'Contato', href: '#contato' },
];

export type TeamMember = {
  role: string;
  /** Nome do integrante. Deixe vazio até a definição. */
  name?: string;
  /** Caminho da foto (ex.: '/team/nome.jpg' dentro de /public). Opcional. */
  photo?: string;
  /** Ajuste vertical do recorte para posicionar o rosto na foto. */
  photoPosition?: string;
};

/** Para adicionar integrantes, basta incluir novos itens nesta lista. */
export const TEAM: TeamMember[] = [
  {
    name: 'Samuel',
    role: 'Gerente de Projetos / Scrum Master',
    photo: '/team/samuel.jpeg',
    photoPosition: 'center 20%',
  },
  {
    name: 'Emanuel',
    role: 'Líder Técnico / Especialista de Execução',
    photo: '/team/emanuel.jpeg',
    photoPosition: 'center 20%',
  },
  { name: 'José', role: 'Analista de Qualidade (QA) e Normas', photo: '/team/jose.jpeg' },
  { name: 'Ian', role: 'Analista de Documentação e Compliance', photo: '/team/ian.jpeg' },
  { name: 'Vargas', role: 'Design', photo: '/team/vargas.jpeg', photoPosition: 'center 20%' },
  { name: 'João', role: 'Auxiliar de Gestão', photo: '/team/joao.jpeg' },
];

/** Responsabilidade compartilhada por todos os integrantes. */
export const TEAM_SHARED_ROLE = 'Programação';
