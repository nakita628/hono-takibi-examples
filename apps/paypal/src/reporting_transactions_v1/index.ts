import { OpenAPIHono } from '@hono/zod-openapi'
import { balancesHandler, transactionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', transactionsHandler).route('/', balancesHandler)

export default app
