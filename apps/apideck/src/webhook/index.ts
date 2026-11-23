import { OpenAPIHono } from '@hono/zod-openapi'
import { webhookHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webhookHandler)

export default app
