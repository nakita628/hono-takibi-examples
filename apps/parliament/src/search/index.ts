import { OpenAPIHono } from '@hono/zod-openapi'
import { descriptionHandler, queryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', descriptionHandler).route('/', queryHandler)

export default app
