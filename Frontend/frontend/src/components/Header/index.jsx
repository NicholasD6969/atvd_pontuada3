import { Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header_wrap">
        
        <Link to="/" className="brand">
          <img src={logo} alt="Logo Drogarias MG" />
          <span>Drogarias MG</span>
        </Link>

        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/sobre-nos">Sobre Nós</Link>
          <Link to="/fale-conosco">Fale Conosco</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
