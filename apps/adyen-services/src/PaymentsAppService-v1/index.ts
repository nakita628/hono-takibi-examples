import { OpenAPIHono } from '@hono/zod-openapi'
import { paymentsAppHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', paymentsAppHandler)

export default app
