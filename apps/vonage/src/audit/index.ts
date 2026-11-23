import { OpenAPIHono } from '@hono/zod-openapi'
import { eventsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventsHandler)

export default app
