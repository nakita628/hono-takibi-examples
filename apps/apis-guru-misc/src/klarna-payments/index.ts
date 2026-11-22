import { OpenAPIHono } from '@hono/zod-openapi'
import { ordersHandler, sessionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ordersHandler).route('/', sessionsHandler)

export default app
