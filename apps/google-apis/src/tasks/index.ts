import { OpenAPIHono } from '@hono/zod-openapi'
import { tasklistsHandler, tasksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tasksHandler).route('/', tasklistsHandler)

export default app
