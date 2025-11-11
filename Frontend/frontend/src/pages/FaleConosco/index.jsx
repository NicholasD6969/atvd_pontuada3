import './style.css';

function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      telefone: event.target.telefone.value,
      mensagem: event.target.mensagem.value
    };

    fetch('http://localhost:3000/api/fale-conosco', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        event.target.reset();
      })
      .catch(() => {
        alert('Erro ao enviar a mensagem.');
      });
  }

  return (
    <section className="contato">
      <h1>Fale Conosco</h1>
      <p>Entre em contato para dúvidas, sugestões ou pedidos.</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="grid cols-3">

          <label className="field">
            <span>Nome:</span>
            <input name="nome" type="text" placeholder="Seu nome" required />
          </label>

          <label className="field">
            <span>Email:</span>
            <input name="email" type="email" placeholder="voce@email.com" required />
          </label>

          <label className="field">
            <span>Telefone:</span>
            <input name="telefone" type="tel" placeholder="(99) 9999-9999" required />
          </label>

          <label className="field">
            <span>Mensagem:</span>
            <textarea
              name="mensagem"
              rows="6"
              placeholder="Escreva sua mensagem aqui..."
              required
            ></textarea>
          </label>

          <button className="btn primary" type="submit">Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
}

export default FaleConosco;
