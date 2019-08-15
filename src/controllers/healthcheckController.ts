import HttpStatus from 'http-status-codes'
import { Context } from 'koa'
import { uptime } from '../services/uptimeService'

export function healthcheckEndpoint(ctx: Context) {
	ctx.status = HttpStatus.OK
	ctx.body = {
		uptime: uptime(),
	}
}
