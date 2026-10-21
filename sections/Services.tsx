import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES } from '../data/content';
import './Services.css';

export function Services() {
  return (
    <section id="solucoes" className="section" aria-labelledby="solucoes-title">
      <div className="container">
        <SectionTitle
          id="solucoes-title"
          eyebrow="Soluções"
          title="Nossas soluções"
          subtitle="Desenvolvemos soluções digitais pensadas para diferentes necessidades."
        />

        <ul className="services">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <article className="service">
                <div className="service__head">
                  <span className="service__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
