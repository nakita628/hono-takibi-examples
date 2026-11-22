import { OpenAPIHono } from '@hono/zod-openapi'
import { organizationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', organizationsHandler)

export default app
