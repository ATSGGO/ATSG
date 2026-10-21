import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Info, Mail, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SITE } from '../config/site';
import './Contact.css';

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'sent' | 'unconfigured';

const EMPTY: Fields = { name: '', email: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }: Fields): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = 'Informe seu nome.';
  if (!email.trim()) errors.email = 'Informe seu e-mail.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Informe um e-mail válido.';
  if (message.trim().length < 10) errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  return errors;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Fields]) setErrors((err) => ({ ...err, [name]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    if (!SITE.whatsappNumber) {
      setStatus('unconfigured');
      return;
    }

    const text = `Olá! Vim pelo site da ${SITE.name}.\n\nNome: ${fields.name.trim()}\nE-mail: ${fields.email.trim()}\n\n${fields.message.trim()}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setStatus('sent');
    setFields(EMPTY);
  };

  const fieldProps = (key: keyof Fields) => ({
    id: `contact-${key}`,
    name: key,
    value: fields[key],
    onChange,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `contact-${key}-error` : undefined,
  });

  return (
    <section id="contato" className="section section--dark contact" aria-labelledby="contato-title">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <span className="eyebrow">Contato</span>
          <h2 id="contato-title">Vamos transformar sua ideia em solução?</h2>
          <p>Entre em contato com a equipe ATSG</p>

          <ul className="contact__channels">
            <li>
              <Mail aria-hidden="true" />
              <div>
                <span>E-mail institucional</span>
                <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="contact__card">
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__field">
              <label htmlFor="contact-name">Nome</label>
              <input type="text" autoComplete="name" placeholder="Seu nome" {...fieldProps('name')} />
              {errors.name && (
                <span className="form__error" id="contact-name-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form__field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="voce@exemplo.com"
                {...fieldProps('email')}
              />
              {errors.email && (
                <span className="form__error" id="contact-email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form__field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea rows={5} placeholder="Conte brevemente sobre o seu projeto" {...fieldProps('message')} />
              {errors.message && (
                <span className="form__error" id="contact-message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn--primary form__submit">
              Enviar mensagem
              <Send aria-hidden="true" />
            </button>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="form__notice form__notice--success">
                  <CheckCircle2 aria-hidden="true" />
                  O WhatsApp foi aberto com a mensagem preenchida. Basta confirmar o envio.
                </p>
              )}
              {status === 'unconfigured' && (
                <p className="form__notice">
                  <Info aria-hidden="true" />
                  Mensagem validada. O envio será habilitado assim que o WhatsApp da equipe for configurado.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
