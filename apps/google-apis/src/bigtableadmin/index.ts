import { OpenAPIHono } from '@hono/zod-openapi'
import { operationsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', operationsHandler)

export default app
