import { OpenAPIHono } from '@hono/zod-openapi'
import { liffHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', liffHandler)

export default app
