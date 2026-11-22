import { OpenAPIHono } from '@hono/zod-openapi'
import { spreadsheetsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', spreadsheetsHandler)

export default app
