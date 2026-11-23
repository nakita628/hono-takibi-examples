import { OpenAPIHono } from '@hono/zod-openapi'
import { getaddressmatchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getaddressmatchHandler)

export default app
