import { OpenAPIHono } from '@hono/zod-openapi'
import { analyticsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', analyticsHandler)

export default app
