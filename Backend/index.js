const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// Conexão com o MySQL
const sequelize = new Sequelize('db_atvd_3', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Modelo Cliente (será usado para Fale Conosco também)
const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Rota principal
app.get('/', (req, res) => {
  res.send('🚀API está funcionando🚀');
});

// Lista todos os registros
app.get('/Clientes', async (req, res) => {
  const Clientes = await Cliente.findAll();
  res.json(Clientes);
});

// Cadastra um cliente manualmente (rota antiga)
app.post('/Clientes', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    const novoCliente = await Cliente.create({
      nome,
      email,
      telefone,
      mensagem,
    });

    res.status(201).json(novoCliente);

  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Cliente já cadastrado.' });
    }
    console.error('Erro ao criar cliente:', err);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// ✅ ROTA NOVA PARA O FORMULÁRIO FALE CONOSCO
app.post('/api/fale-conosco', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    const novoRegistro = await Cliente.create({
      nome,
      email,
      telefone,
      mensagem,
    });

    res.status(201).json({
      message: 'Mensagem enviada com sucesso!',
      novoRegistro,
    });

  } catch (err) {
    console.error('Erro ao enviar mensagem:', err);
    res.status(500).json({ message: 'Erro ao enviar mensagem.' });
  }
});

// Sincroniza e inicia o servidor
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀API rodando em http://localhost:${port}`);
      console.log('🚀Conectado ao banco de dados MySQL.');
    });
  })
  .catch((error) => {
    console.log('Não foi possível conectar ao banco de dados:', error);
  });
