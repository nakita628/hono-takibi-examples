import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, pluginsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', pluginsHandler)

export default app
