import { OpenAPIHono } from '@hono/zod-openapi'
import { appsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appsHandler).route('/', projectsHandler)

export default app
