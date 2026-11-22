import { OpenAPIHono } from '@hono/zod-openapi'
import { presentationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', presentationsHandler)

export default app
