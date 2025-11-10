import './style.css';

function Servicos() {
  return (
    <section className="servicos">
      <h1>Serviços da Drogarias MG</h1>
      <p>Conheça nossos principais serviços e cuidados pensados para a sua saúde e bem-estar.</p>

      <div className="grid cols-3">
        <div className="card">
          <h3>Aferição de Pressão e Glicemia</h3>
          <p>Serviços rápidos e seguros para acompanhar sua saúde diariamente.</p>
        </div>

        <div className="card">
          <h3>Aplicação de Injetáveis</h3>
          <p>Profissionais qualificados para realizar a aplicação de medicamentos sob prescrição médica.</p>
        </div>

        <div className="card">
          <h3>Orientação Farmacêutica</h3>
          <p>Conte com o suporte de nossos farmacêuticos para esclarecer dúvidas sobre o uso correto de medicamentos.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicos;