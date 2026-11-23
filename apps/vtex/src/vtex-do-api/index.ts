import { OpenAPIHono } from '@hono/zod-openapi'
import { notesHandler, tasksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', notesHandler).route('/', tasksHandler)

export default app
