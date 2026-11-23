import { OpenAPIHono } from '@hono/zod-openapi'
import { jsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', jsonHandler)

export default app
