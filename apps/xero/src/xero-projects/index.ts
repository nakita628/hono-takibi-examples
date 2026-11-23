import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, projectsUsersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', projectsUsersHandler)

export default app
