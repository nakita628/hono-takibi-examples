import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, feedsHandler, staticHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', feedsHandler).route('/', staticHandler)

export default app
