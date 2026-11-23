import { OpenAPIHono } from '@hono/zod-openapi'
import { timesheetsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', timesheetsHandler)

export default app
