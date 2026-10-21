import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../config/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { BrandLogo } from './BrandLogo';
import './Header.css';

const DESKTOP_QUERY = '(min-width: 1120px)';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((item) => item.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll da página e permite fechar com Esc enquanto o menu está aberto.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled || open ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <BrandLogo />

        <nav className="header__nav" aria-label="Navegação principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={active === item.href.slice(1) ? 'is-active' : undefined}
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#solucoes" className="btn btn--primary btn--sm header__cta">
          Conheça nossas soluções
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label="Navegação principal (mobile)">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close} className={active === item.href.slice(1) ? 'is-active' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#solucoes" className="btn btn--primary mobile-menu__cta" onClick={close}>
            Conheça nossas soluções
            <ArrowRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
