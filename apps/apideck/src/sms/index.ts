import { OpenAPIHono } from '@hono/zod-openapi'
import { smsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', smsHandler)

export default app
