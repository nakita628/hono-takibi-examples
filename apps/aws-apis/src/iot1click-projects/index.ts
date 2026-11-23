import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', tagsHandler)

export default app
