import { OpenAPIHono } from '@hono/zod-openapi'
import { tablesHandler, workspacesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tablesHandler).route('/', workspacesHandler)

export default app
