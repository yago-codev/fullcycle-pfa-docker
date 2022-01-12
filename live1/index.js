const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Aceleração Docker 🚀');
});

app.listen(3000, () => {
    console.log('Servidor Node rodando na porta 3000 🔥')
});