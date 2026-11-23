import { OpenAPIHono } from '@hono/zod-openapi'
import { sessionsHandler, vHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vHandler).route('/', sessionsHandler)

export default app
