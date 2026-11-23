import { OpenAPIHono } from '@hono/zod-openapi'
import { ordersHandler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ordersHandler).route('/', v2Handler)

export default app
