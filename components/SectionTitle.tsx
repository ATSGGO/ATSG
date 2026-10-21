import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import './SectionTitle.css';

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  id?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionTitle({ eyebrow, title, subtitle, id, align = 'left', tone = 'light' }: SectionTitleProps) {
  return (
    <Reveal className={`section-title section-title--${align} section-title--${tone}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </Reveal>
  );
}
