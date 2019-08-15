import HttpStatus from 'http-status-codes'
import { runExists, storeVote, getVotes } from '../services/voteService'
import { Context } from 'koa'

export async function storeVoteEndpoint(ctx: Context) {
	const { runId } = ctx.params

	if (runExists(runId) === false) {
		ctx.throw(HttpStatus.NOT_FOUND, 'Run Does not exist')
		return
	}

	if (!ctx.body) {
		ctx.throw(HttpStatus.BAD_REQUEST, 'Please supply a body')
		return
	}

	if (ctx.body.vote === undefined) {
		ctx.throw(HttpStatus.BAD_REQUEST, 'Please supply a vote in the body')
		return
	}

	if (Number.isNaN(ctx.body.vote)) {
		ctx.throw(HttpStatus.BAD_REQUEST, 'Vote is not of type number')
		return
	}

	await storeVote(runId, 'unknown', Number(ctx.body.vote))

	ctx.body = {
		ok: 'success',
	}
}

export async function getVotesEndpoint(ctx: Context) {
	const { runId } = ctx.params

	if (runExists(runId) === false) {
		ctx.throw(HttpStatus.NOT_FOUND, 'Run does not exist')
		return
	}

	const votes = await getVotes(runId)

	ctx.body = { votes }
}
