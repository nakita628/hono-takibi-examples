import { OpenAPIHono } from '@hono/zod-openapi'
import { idealHandler, paymentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', idealHandler).route('/', paymentsHandler)

export default app
