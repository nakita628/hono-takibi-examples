import { OpenAPIHono } from '@hono/zod-openapi'
import { operationsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', usersHandler).route('/', operationsHandler)

export default app
