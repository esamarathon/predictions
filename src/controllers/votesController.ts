import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import { runExists } from '../services/runService';
import { storeVote, getVotes } from '../services/voteService';

export async function storeVoteEndpoint(req: Request, res: Response) {
	const { runId, vote } = req.params;

	if ((await runExists(runId)) === false) {
		return res.status(HttpStatus.NOT_FOUND).send({
			error: 'Run does not exist',
		});
	}

	if (!req.body) {
		return res.status(HttpStatus.BAD_REQUEST).send({
			error: 'Please supply a body',
		});
	}

	if (req.body.vote === undefined) {
		return res.status(HttpStatus.BAD_REQUEST).send({
			error: 'Please supply a vote in the body',
		});
	}

	if (Number.isNaN(req.body.vote)) {
		return res.status(HttpStatus.BAD_REQUEST).send({
			error: 'Vote is not of type number',
		});
	}

	await storeVote(runId, 'unknown', Number(req.body.vote));

	return res.status(HttpStatus.OK).send({
		ok: 'success',
	});
}

export async function getVotesEndpoint(req: Request, res: Response) {
	const { runId } = req.params;

	if ((await runExists(runId)) === false) {
		return res.status(HttpStatus.NOT_FOUND).send({
			error: 'Run does not exist',
		});
	}

	const votes = await getVotes(runId);

	return res.status(HttpStatus.OK).send(votes);
}
