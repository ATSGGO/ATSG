import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { PROCESS_STEPS } from '../data/content';
import './Process.css';

export function Process() {
  return (
    <section id="processo" className="section section--dark process" aria-labelledby="processo-title">
      <div className="container">
        <SectionTitle id="processo-title" tone="dark" eyebrow="Como trabalhamos" title="Da ideia à solução" />

        <ol className="timeline">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="timeline__step">
              <span className="timeline__node" aria-hidden="true" />
              <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
