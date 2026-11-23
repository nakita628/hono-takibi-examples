import { OpenAPIHono } from '@hono/zod-openapi'
import { domainsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', domainsHandler).route('/', projectsHandler)

export default app
