import { OpenAPIHono } from '@hono/zod-openapi'
import { sessionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sessionsHandler)

export default app
