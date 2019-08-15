import { Context } from 'koa'
import { uptime } from '../services/uptimeService'

export function healthcheckEndpoint(ctx: Context) {
	ctx.body = {
		uptime: uptime(),
	}
}
