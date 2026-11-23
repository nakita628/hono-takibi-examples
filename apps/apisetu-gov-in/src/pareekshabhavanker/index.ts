import { OpenAPIHono } from '@hono/zod-openapi'
import { sslcrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sslcrHandler)

export default app
