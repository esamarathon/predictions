import { Context } from 'koa'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function errorHandling(ctx: Context, next: () => Promise<any>) {
	try {
		await next()
	} catch (error) {
		ctx.status = error.status || 500
		ctx.body =
			ctx.status === 500
				? { error: 'Internal server error' }
				: typeof error.message === 'object'
				? error.message
				: { error: error.message }
		ctx.app.emit('error', error)
	}
}
