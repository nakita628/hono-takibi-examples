import { OpenAPIHono } from '@hono/zod-openapi'
import { applicationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', applicationsHandler)

export default app
