import { OpenAPIHono } from '@hono/zod-openapi'
import { tagsHandler, workspacesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', workspacesHandler).route('/', tagsHandler)

export default app
