import { OpenAPIHono } from '@hono/zod-openapi'
import { messagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', messagesHandler)

export default app
