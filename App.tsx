import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { MissionVision } from './sections/MissionVision';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Team } from './sections/Team';
// import { Portfolio } from './sections/Portfolio';
import { Commitment } from './sections/Commitment';
import { Contact } from './sections/Contact';

export default function App() {
  // Links diretos (ex.: /#equipe) chegam antes do conteúdo existir; rola até a seção após montar.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    const frame = requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Process />
        <Team />
        {/* Portfólio oculto por enquanto; para reativar, descomente e volte o item no menu (src/config/site.ts). */}
        {/* <Portfolio /> */}
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
