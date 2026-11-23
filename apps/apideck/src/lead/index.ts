import { OpenAPIHono } from '@hono/zod-openapi'
import { leadHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', leadHandler)

export default app
