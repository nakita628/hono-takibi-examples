import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler)

export default app
