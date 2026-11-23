import { OpenAPIHono } from '@hono/zod-openapi'
import { routingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', routingHandler)

export default app
