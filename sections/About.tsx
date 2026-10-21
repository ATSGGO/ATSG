import logo from '../assets/Logótipo ATSG com símbolo A esmeralda (1).png';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import './About.css';

const HIGHLIGHTS = ['Tecnologia', 'Soluções', 'Resultados'];

export function About() {
  return (
    <section id="quem-somos" className="section about" aria-labelledby="quem-somos-title">
      <div className="container about__grid">
        <div className="about__content">
          <SectionTitle id="quem-somos-title" eyebrow="Institucional" title="Quem somos" />

          <Reveal className="about__text">
            <p>
              A ATSG é uma empresa simulada de tecnologia e engenharia criada para desenvolver soluções digitais
              alinhadas às necessidades de cada projeto.
            </p>
            <p>
              Nosso trabalho combina desenvolvimento, organização e aplicação prática da tecnologia para transformar
              ideias em soluções funcionais.
            </p>
          </Reveal>

          <Reveal as="ul" delay={100} className="about__highlights">
            {HIGHLIGHTS.map((item, i) => (
              <li key={item}>
                <span className="about__index">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} as="figure" className="about__media">
          <img src={logo} width={2000} height={500} loading="lazy" decoding="async" alt="Logotipo ATSG" />
          <figcaption>Conectando oportunidades a um futuro melhor</figcaption>
        </Reveal>
      </div>
    </section>
  );
}
