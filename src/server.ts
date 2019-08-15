import express from 'express';
import helmet from 'helmet';
import HttpStatus from 'http-status-codes';
import rateLimit from 'express-rate-limit';
import config from './config';
import { healthcheckEndpoint } from './controllers/healthcheckController';
import { getVotesEndpoint, storeVoteEndpoint } from './controllers/votesController';

const app = express();
app.use(helmet());
app.use(new rateLimit(config.rateLimit));
app.use(express.json());
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.error(err.stack);
	next(err);
});
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	if (req.xhr) {
		res.status(500).send({
			error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
		});
	} else {
		next(err);
	}
});

app.get('/api/_healthcheck', healthcheckEndpoint);
app.get('/api/votes/:runId', getVotesEndpoint);
app.post('/api/votes/:runId', storeVoteEndpoint);

console.log('Starting server...');
app.listen(config.port, () => {
	console.log(`Now listening on http://localhost:${config.port}`);
});
