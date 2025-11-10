import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div><strong>Drogarias MG</strong> - CNPJ: 12.345.678/0001-90</div>
        <div>Rua das Flores, 123 - Centro - Belo Horizonte / MG</div>
        <div className="copy">© {new Date().getFullYear()} - Drogarias MG. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;

