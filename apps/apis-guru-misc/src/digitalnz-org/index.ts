import { OpenAPIHono } from '@hono/zod-openapi'
import { apiCallsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiCallsHandler)

export default app
