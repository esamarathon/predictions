import express from 'express';

const PORT = Number(process.env.PORT || 8080);

const app = express();

app.get('/', (_, res) => {
	res.status(200).send('ok');
});

app.use('/_healthcheck', (_, res) => {
	res.status(200).json({
		uptime: process.uptime(),
	});
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
