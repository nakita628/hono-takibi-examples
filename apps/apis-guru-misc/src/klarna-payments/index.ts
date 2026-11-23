import { OpenAPIHono } from '@hono/zod-openapi'
import { paymentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', paymentsHandler)

export default app
