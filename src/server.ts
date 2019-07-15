import express from 'express';
import config from './config';
import { healthcheck } from './controllers/healthcheckController';

const app = express();

app.get('/_healthcheck', healthcheck);

console.log('Starting server...');
app.listen(config.port, () => {
	console.log(`Now listening on http://localhost:${config.port}`);
});
