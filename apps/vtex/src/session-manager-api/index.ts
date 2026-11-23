import { OpenAPIHono } from '@hono/zod-openapi'
import { segmentsHandler, sessionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', segmentsHandler).route('/', sessionsHandler)

export default app
