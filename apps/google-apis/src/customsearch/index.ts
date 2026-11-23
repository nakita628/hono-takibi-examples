import { OpenAPIHono } from '@hono/zod-openapi'
import { customsearchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', customsearchHandler)

export default app
