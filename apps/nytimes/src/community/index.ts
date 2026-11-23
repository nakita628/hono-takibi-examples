import { OpenAPIHono } from '@hono/zod-openapi'
import { userContentHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', userContentHandler)

export default app
