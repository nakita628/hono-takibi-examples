import { OpenAPIHono } from '@hono/zod-openapi'
import { queryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', queryHandler)

export default app
