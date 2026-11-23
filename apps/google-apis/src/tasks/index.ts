import { OpenAPIHono } from '@hono/zod-openapi'
import { tasksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tasksHandler)

export default app
