const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário do MySQL
  password: '', // Substitua pela sua senha do MySQL
  database: 'angular_mysql', // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para buscar todos os alunos
app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um aluno
app.post('/students', (req, res) => {
  const student = req.body;
  const sql = 'INSERT INTO students SET ?';
  db.query(sql, student, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Aluno adicionado com sucesso!', id: result.insertId });
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
