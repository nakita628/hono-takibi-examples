import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceHandler, lookupHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', balanceHandler).route('/', lookupHandler)

export default app
