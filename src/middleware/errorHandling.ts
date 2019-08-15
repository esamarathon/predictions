import { Context } from 'koa'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function errorHandling(ctx: Context, next: () => Promise<any>) {
	try {
		await next()
	} catch (error) {
		ctx.status = error.status || 500
		ctx.body = error.message
		ctx.app.emit('error', error)
	}
}

export async function errorLogger(error: Error) {
	console.error(error)
}
