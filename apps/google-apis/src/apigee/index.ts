import { OpenAPIHono } from '@hono/zod-openapi'
import { organizationsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', organizationsHandler).route('/', projectsHandler)

export default app
