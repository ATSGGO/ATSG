import type { LucideIcon } from 'lucide-react';
import {
  Monitor,
  Settings2,
  Cloud,
  Workflow,
  ShieldCheck,
  CalendarCheck,
  FileText,
  Users,
  FolderGit2,
  PackageCheck,
  FileSearch,
} from 'lucide-react';

type IconItem = { icon: LucideIcon; title: string; text: string };

export const SERVICES: IconItem[] = [
  {
    icon: Monitor,
    title: 'Desenvolvimento de Sites',
    text: 'Criação de sites institucionais e páginas digitais responsivas, com foco em experiência do usuário, desempenho e apresentação profissional da marca.',
  },
  {
    icon: Settings2,
    title: 'Desenvolvimento de Sistemas',
    text: 'Desenvolvimento de sistemas personalizados para organização de processos, gerenciamento de informações e apoio às operações.',
  },
  {
    icon: Cloud,
    title: 'Soluções Digitais',
    text: 'Aplicação de recursos tecnológicos e soluções digitais para tornar processos mais organizados, eficientes e conectados.',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    text: 'Automação de tarefas e fluxos digitais para reduzir atividades repetitivas e melhorar a eficiência operacional.',
  },
];

export const PROCESS_STEPS = [
  { title: 'Entendimento', text: 'Identificamos a necessidade e os objetivos do projeto.' },
  { title: 'Planejamento', text: 'Organizamos requisitos, prioridades e etapas de execução.' },
  { title: 'Desenvolvimento', text: 'Construímos e testamos a solução de acordo com o escopo definido.' },
  { title: 'Entrega', text: 'Validamos o resultado e organizamos as informações necessárias para a entrega.' },
];

export const VALUES = ['Qualidade', 'Organização', 'Inovação', 'Responsabilidade', 'Trabalho em equipe'];

export const COMMITMENTS: IconItem[] = [
  { icon: ShieldCheck, title: 'Qualidade', text: 'Cada entrega passa por revisão antes da apresentação.' },
  { icon: CalendarCheck, title: 'Prazo', text: 'Organização e acompanhamento das tarefas fazem parte do nosso processo.' },
  {
    icon: FileText,
    title: 'Documentação',
    text: 'Registramos informações importantes para facilitar a utilização e manutenção das soluções.',
  },
  { icon: Users, title: 'Trabalho em equipe', text: 'Cada integrante possui responsabilidades definidas dentro do projeto.' },
];

export const PORTFOLIO_SLOTS: IconItem[] = [
  {
    icon: FolderGit2,
    title: 'Projetos em desenvolvimento',
    text: 'Soluções em construção pela equipe, apresentadas conforme avançam nas etapas do processo.',
  },
  {
    icon: PackageCheck,
    title: 'Próximas entregas',
    text: 'Resultados de cada etapa, publicados aqui após a validação da equipe.',
  },
  {
    icon: FileSearch,
    title: 'Evidências técnicas',
    text: 'Documentação, testes e registros que comprovam o desenvolvimento de cada solução.',
  },
];
