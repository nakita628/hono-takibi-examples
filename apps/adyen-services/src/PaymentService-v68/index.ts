import { OpenAPIHono } from '@hono/zod-openapi'
import { modificationsHandler, paymentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', modificationsHandler).route('/', paymentsHandler)

export default app
