import { Link } from 'react-router-dom';
import './style.css';
import banner from '../../assets/logo.png';

function Home() {
  return (
    <div className="home">
      <section className="hero" >
        <h1 className="hero__title">DROGARIAS MG</h1>

        <div className="hero__image">
          <img
            src={banner}
            alt="Logo da Drogarias MG"
            
          />
        </div>

        <div className="hero_text" >
          <h2>Cuidando da sua saúde com confiança e qualidade</h2>
          <p>
            Na Drogarias MG você encontra medicamentos, produtos de bem-estar e atendimento humanizado.
          </p>

          <div className="hero__cta" >
            <Link to="/servicos" className="btn primary" >
              Ver Serviços
            </Link>
            <Link to="/fale-conosco" className="btn">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>O que oferecemos</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Medicamentos e Genéricos</h3>
            <p>Ampla variedade de medicamentos com preços acessíveis e procedência garantida.</p>
          </div>
          <div className="card">
            <h3>Cuidados com a Saúde</h3>
            <p>Vitaminas, produtos de higiene, cosméticos e itens para o seu bem-estar diário.</p>
          </div>
          <div className="card">
            <h3>Atendimento Personalizado</h3>
            <p>Profissionais capacitados para orientar e ajudar você a cuidar melhor da sua saúde.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;