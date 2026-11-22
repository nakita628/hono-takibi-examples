import { OpenAPIHono } from '@hono/zod-openapi'
import { labelsHandler, limitsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', labelsHandler).route('/', limitsHandler).route('/', usersHandler)

export default app
