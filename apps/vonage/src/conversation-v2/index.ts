import { OpenAPIHono } from '@hono/zod-openapi'
import { conversationsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', conversationsHandler).route('/', usersHandler)

export default app
