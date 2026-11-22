import { OpenAPIHono } from '@hono/zod-openapi'
import { batchesHandler, eventsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventsHandler).route('/', batchesHandler)

export default app
