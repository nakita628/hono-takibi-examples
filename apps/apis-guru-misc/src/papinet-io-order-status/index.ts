import { OpenAPIHono } from '@hono/zod-openapi'
import { ordersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ordersHandler)

export default app
