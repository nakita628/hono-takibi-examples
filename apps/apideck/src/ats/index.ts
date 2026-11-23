import { OpenAPIHono } from '@hono/zod-openapi'
import { atsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', atsHandler)

export default app
