import { OpenAPIHono } from '@hono/zod-openapi'
import { conversationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', conversationsHandler)

export default app
