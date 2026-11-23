import { OpenAPIHono } from '@hono/zod-openapi'
import { indexPhpHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', indexPhpHandler)

export default app
