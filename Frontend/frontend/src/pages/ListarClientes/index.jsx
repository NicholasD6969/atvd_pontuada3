// src/pages/ListaClientes/index.jsx
import { useEffect, useState } from "react";
import "./style.css";

function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca os dados do backend
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/contatos");
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    <section className="lista-clientes">
      <h1>Lista de Contatos</h1>

      {loading ? (
        <p>Carregando contatos...</p>
      ) : clientes.length === 0 ? (
        <p>Nenhum contato cadastrado ainda.</p>
      ) : (
        <table className="tabela-clientes">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Mensagem</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.mensagem}</td>
                <td>
                  {new Date(cliente.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default ListaClientes;