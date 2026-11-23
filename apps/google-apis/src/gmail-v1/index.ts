import { OpenAPIHono } from '@hono/zod-openapi'
import { gmailHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', gmailHandler)

export default app
