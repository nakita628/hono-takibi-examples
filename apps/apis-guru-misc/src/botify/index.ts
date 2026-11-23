import { OpenAPIHono } from '@hono/zod-openapi'
import { analysesHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', analysesHandler).route('/', projectsHandler)

export default app
