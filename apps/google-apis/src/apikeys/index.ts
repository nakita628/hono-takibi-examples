import { OpenAPIHono } from '@hono/zod-openapi'
import { keysHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', keysHandler).route('/', projectsHandler)

export default app
