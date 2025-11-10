import './style.css';

function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <section className="contato">
      <h1>Fale Conosco</h1>
      <p>Entre em contato para dúvidas, sugestões ou pedidos.</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="grid cols-3">
          <label className="field">
            <span>Nome:</span>
            <input type="text" placeholder="Seu nome" required />
          </label>

          <label className="field">
            <span>Email:</span>
            <input type="email" placeholder="voce@email.com" required />
          </label>

          <label className="field">
            <span>Telefone:</span>
            <input type="tel" placeholder="(99) 9999-9999" required />
          </label>

          <label className="field">
            <span>Mensagem:</span>
            <textarea rows="6" placeholder="Escreva sua mensagem aqui..." required></textarea>
          </label>

          <button className="btn primary" type="submit">Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
}

export default FaleConosco;