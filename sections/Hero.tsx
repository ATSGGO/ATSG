import { ArrowRight, Cloud, Monitor, Settings2 } from 'lucide-react';
import logo from '../assets/Logótipo ATSG com símbolo A esmeralda (1).png';
import './Hero.css';

const PILLARS = [
  { icon: Monitor, label: 'Sites' },
  { icon: Settings2, label: 'Sistemas' },
  { icon: Cloud, label: 'Soluções Digitais' },
];

/** Traçados de circuito que conectam o símbolo, inspirados no banner institucional. */
const TRACES = [
  { d: 'M170 200 H112 L72 160 H24', node: [24, 160] },
  { d: 'M170 262 H52', node: [52, 262] },
  { d: 'M170 322 H124 L84 362 V446', node: [84, 446] },
  { d: 'M240 150 V96 L204 60', node: [204, 60] },
  { d: 'M390 196 H448 L496 148 V68', node: [496, 68] },
  { d: 'M390 290 H532', node: [532, 290] },
  { d: 'M306 370 V424 L346 464 H446', node: [446, 464] },
];

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            ATSG
          </p>

          <h1 className="hero__title">
            <span id="hero-title">
              <span>Tecnologia que</span> <strong>impulsiona</strong> <span>o seu negócio</span>
            </span>
          </h1>

          <p className="hero__text">
            Desenvolvemos soluções digitais, sistemas e experiências tecnológicas pensadas para transformar
            necessidades em resultados.
          </p>

          <div className="hero__actions">
            <a href="#solucoes" className="btn btn--primary">
              Conheça nossas soluções
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="#contato" className="btn btn--ghost-light">
              Fale com a equipe
            </a>
          </div>

          <ul className="hero__pillars">
            {PILLARS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <svg className="hero__traces" viewBox="0 0 560 520" aria-hidden="true">
            {TRACES.map((t) => (
              <g key={t.d}>
                <path d={t.d} />
                <circle cx={t.node[0]} cy={t.node[1]} r="7" />
              </g>
            ))}
          </svg>
          <div className="hero__tile">
            <img src={logo} alt="ATSG" width={640} height={213} decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
