import { OpenAPIHono } from '@hono/zod-openapi'
import { healthHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', healthHandler)

export default app
