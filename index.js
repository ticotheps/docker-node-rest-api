const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Node.js app listening at http://localhost:${port}`);
});

app.get('/churches', (req, res) => {
	res.json({ name: 'Elkton Missionary Church' });
});
