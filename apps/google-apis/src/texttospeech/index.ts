import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, textHandler, voicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', textHandler).route('/', voicesHandler).route('/', projectsHandler)

export default app
