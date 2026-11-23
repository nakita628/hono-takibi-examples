import { OpenAPIHono } from '@hono/zod-openapi'
import { templatesHandler, workspacesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', templatesHandler).route('/', workspacesHandler)

export default app
