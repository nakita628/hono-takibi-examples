import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, websocketHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', websocketHandler)

export default app
