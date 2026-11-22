import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, systempolicyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', systempolicyHandler)

export default app
