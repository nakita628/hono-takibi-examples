import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, sitesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sitesHandler).route('/', projectsHandler)

export default app
