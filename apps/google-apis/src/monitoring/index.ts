import { OpenAPIHono } from '@hono/zod-openapi'
import { locationsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', locationsHandler).route('/', projectsHandler)

export default app
