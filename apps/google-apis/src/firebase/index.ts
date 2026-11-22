import { OpenAPIHono } from '@hono/zod-openapi'
import { availableProjectsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', availableProjectsHandler).route('/', projectsHandler)

export default app
