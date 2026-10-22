import { Code2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { TEAM, TEAM_SHARED_ROLE } from '../config/site';
import './Team.css';

export function Team() {
  return (
    <section id="equipe" className="section" aria-labelledby="equipe-title">
      <div className="container">
        <SectionTitle
          id="equipe-title"
          eyebrow="Equipe"
          title="Nossa equipe"
          subtitle="Cada integrante possui uma responsabilidade dentro do desenvolvimento e execução dos projetos."
        />

        <ul className="team">
          {TEAM.map((member, i) => {
            const name = member.name || 'Nome do integrante';
            return (
              <Reveal as="li" key={member.role} delay={(i % 3) * 80} className="member">
                <div className="member__avatar" aria-hidden={member.photo ? undefined : true}>
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={name}
                      width={96}
                      height={96}
                      loading="lazy"
                      style={{ objectPosition: member.photoPosition }}
                    />
                  ) : (
                    <span>{member.name ? member.name.charAt(0) : '?'}</span>
                  )}
                </div>
                <h3 className={member.name ? undefined : 'member__name--pending'}>{name}</h3>
                <p className="member__role">{member.role}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal as="p" className="team__shared">
          <Code2 aria-hidden="true" />
          <span>
            <strong>{TEAM_SHARED_ROLE}:</strong> realizada em conjunto por todos os integrantes da equipe.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
