const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Node.js app listening at http://localhost:${port}`);
});

app.get('/churches', (req, res) => {
	res.json({ name: 'Elkton Missionary Church' });
});

// configure app to allow POST requests to send URL encoded data
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.post('/prayer', (req, res) => {
	const body = req.body;
	console.log(req.body.amen);
	res.send(req.body.amen);
});
