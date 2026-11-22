import { OpenAPIHono } from '@hono/zod-openapi'
import { segmentHandler, sessionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', segmentHandler).route('/', sessionsHandler)

export default app
