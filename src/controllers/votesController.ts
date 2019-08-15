import HttpStatus from 'http-status-codes'
import { runExists } from '../services/runService'
import { storeVote, getVotes } from '../services/voteService'
import { Context } from 'koa'

export async function storeVoteEndpoint(ctx: Context) {
	const { runId } = ctx.params

	if ((await runExists(runId)) === false) {
		ctx.status = HttpStatus.NOT_FOUND
		ctx.body = {
			error: 'Run does not exist',
		}
		return
	}

	if (!ctx.body) {
		ctx.status = HttpStatus.BAD_REQUEST
		ctx.body = {
			error: 'Please supply a body',
		}
		return
	}

	if (ctx.body.vote === undefined) {
		ctx.status = HttpStatus.BAD_REQUEST
		ctx.body = {
			error: 'Please supply a vote in the body',
		}
		return
	}

	if (Number.isNaN(ctx.body.vote)) {
		ctx.status = HttpStatus.BAD_REQUEST
		ctx.body = {
			error: 'Vote is not of type number',
		}
		return
	}

	await storeVote(runId, 'unknown', Number(ctx.body.vote))

	ctx.status = HttpStatus.OK
	ctx.body = {
		ok: 'success',
	}
}

export async function getVotesEndpoint(ctx: Context) {
	const { runId } = ctx.params

	if ((await runExists(runId)) === false) {
		ctx.status = HttpStatus.NOT_FOUND
		ctx.body = {
			error: 'Run does not exist',
		}
		return
	}

	const votes = await getVotes(runId)

	ctx.status = HttpStatus.OK
	ctx.body = { votes }
}
