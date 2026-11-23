import { OpenAPIHono } from '@hono/zod-openapi'
import { queryJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', queryJsonHandler)

export default app
