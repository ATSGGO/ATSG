import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { PORTFOLIO_SLOTS } from '../data/content';
import './Portfolio.css';

export function Portfolio() {
  return (
    <section id="portfolio" className="section section--light" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionTitle
          id="portfolio-title"
          eyebrow="Portfólio"
          title="Projetos e casos de sucesso"
          subtitle="Esta área será utilizada para apresentar os projetos, evidências técnicas e soluções desenvolvidas pela equipe ao longo das próximas etapas."
        />

        <ul className="portfolio">
          {PORTFOLIO_SLOTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="project">
              <div className="project__preview" aria-hidden="true">
                <Icon />
              </div>
              <div className="project__body">
                <span className="project__status">Em preparação</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
