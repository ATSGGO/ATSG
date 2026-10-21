import { Check, Compass, Eye, Gem } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { VALUES } from '../data/content';
import './MissionVision.css';

export function MissionVision() {
  return (
    <section id="missao" className="section section--light" aria-labelledby="missao-title">
      <div className="container">
        <SectionTitle id="missao-title" eyebrow="Direcionamento" title="Missão, visão e valores" />

        <div className="mvv">
          <Reveal as="article" className="mvv__item">
            <Compass className="mvv__icon" aria-hidden="true" />
            <h3>Missão</h3>
            <p>
              Desenvolver soluções tecnológicas eficientes, acessíveis e alinhadas às necessidades de cada projeto.
            </p>
          </Reveal>

          <Reveal as="article" delay={100} className="mvv__item">
            <Eye className="mvv__icon" aria-hidden="true" />
            <h3>Visão</h3>
            <p>
              Construir uma empresa reconhecida pela organização, qualidade técnica e capacidade de transformar ideias
              em soluções digitais.
            </p>
          </Reveal>

          <Reveal as="article" delay={200} className="mvv__item">
            <Gem className="mvv__icon" aria-hidden="true" />
            <h3>Valores</h3>
            <ul className="mvv__values">
              {VALUES.map((value) => (
                <li key={value}>
                  <Check aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
