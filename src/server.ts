import Koa from 'koa'
import Router from 'koa-router'
import helmet from 'koa-helmet'
import config from './config'
import { healthcheckEndpoint } from './controllers/healthcheckController'
import { getVotesEndpoint, storeVoteEndpoint } from './controllers/votesController'
import { errorHandling } from './middleware/errorHandling'
import { errorLogger } from './services/errorLoggingService'

const app = new Koa()
app.use(helmet())
app.use(errorHandling)
app.on('error', errorLogger)

const router = new Router()
router.get('/api/_healthcheck', healthcheckEndpoint)
router.get('/api/votes/:runId', getVotesEndpoint)
router.post('/api/votes/:runId', storeVoteEndpoint)

console.log('Starting server...')
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(config.port, () => {
	console.log(`Now listening on http://localhost:${config.port}`)
})
