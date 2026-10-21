import logo from '../assets/Logótipo ATSG com símbolo A esmeralda (1).png';
import { NAV_ITEMS, SITE } from '../config/site';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" aria-label="ATSG — voltar ao início">
              <img src={logo} alt="ATSG" width={2000} height={500} loading="lazy" />
            </a>
            <div>
              <p className="footer__name">{SITE.name}</p>
              <p className="footer__slogan">{SITE.slogan}.</p>
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="footer__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {SITE.year} {SITE.name}. Projeto acadêmico.
          </p>
        </div>
      </div>
    </footer>
  );
}
