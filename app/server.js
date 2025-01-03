const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = '/data/tasks.json';

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota para carregar tarefas
app.get('/tasks', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') return res.status(500).send('Erro ao carregar tarefas');
        const tasks = data ? JSON.parse(data) : [];
        res.json(tasks);
    });
});

// Rota para salvar tarefas
app.post('/tasks', (req, res) => {
    const tasks = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(tasks), (err) => {
        if (err) return res.status(500).send('Erro ao salvar tarefas');
        res.status(200).send('Tarefas salvas');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
