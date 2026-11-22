import { OpenAPIHono } from '@hono/zod-openapi'
import { healthHandler, statusHandler, tasksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', statusHandler).route('/', healthHandler).route('/', tasksHandler)

export default app
