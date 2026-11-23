import { OpenAPIHono } from '@hono/zod-openapi'
import { proxyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', proxyHandler)

export default app
