import logo from '../assets/Logótipo ATSG com símbolo A esmeralda (1).png';
import './BrandLogo.css';

export function BrandLogo() {
  return (
    <a href="#inicio" className="brand" aria-label="ATSG — voltar ao início">
      <img className="brand__word" src={logo} alt="ATSG" width={2000} height={500} />
    </a>
  );
}
