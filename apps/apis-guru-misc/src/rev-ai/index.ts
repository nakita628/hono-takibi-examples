import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, jobsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountHandler).route('/', jobsHandler)

export default app
