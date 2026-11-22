import { OpenAPIHono } from '@hono/zod-openapi'
import { groupsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', groupsHandler)

export default app
