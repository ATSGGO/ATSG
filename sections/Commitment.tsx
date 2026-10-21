import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { COMMITMENTS } from '../data/content';
import './Commitment.css';

export function Commitment() {
  return (
    <section id="compromisso" className="section section--light" aria-labelledby="compromisso-title">
      <div className="container commitment">
        <SectionTitle
          id="compromisso-title"
          eyebrow="Qualidade"
          title="Nosso compromisso"
          subtitle="Práticas que acompanham cada etapa do trabalho da equipe."
        />

        <ul className="commitment__list">
          {COMMITMENTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="commitment__item">
              <Icon aria-hidden="true" />
              <div>
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
