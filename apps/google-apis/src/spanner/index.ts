import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, scansHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', scansHandler)

export default app
