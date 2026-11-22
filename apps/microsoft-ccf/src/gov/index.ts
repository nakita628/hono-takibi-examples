import { OpenAPIHono } from '@hono/zod-openapi'
import { govHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', govHandler)

export default app
