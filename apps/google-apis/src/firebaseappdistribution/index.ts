import { OpenAPIHono } from '@hono/zod-openapi'
import { mediaHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mediaHandler).route('/', projectsHandler)

export default app
