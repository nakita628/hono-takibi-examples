import { OpenAPIHono } from '@hono/zod-openapi'
import { eventsHandler, itemsHandler, usersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventsHandler).route('/', itemsHandler).route('/', usersHandler)

export default app
