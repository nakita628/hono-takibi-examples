import { OpenAPIHono } from '@hono/zod-openapi'
import { queriesHandler, reportsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', queriesHandler).route('/', reportsHandler)

export default app
