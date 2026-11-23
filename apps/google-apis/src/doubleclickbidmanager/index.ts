import { OpenAPIHono } from '@hono/zod-openapi'
import { queriesHandler, queryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', queriesHandler).route('/', queryHandler)

export default app
