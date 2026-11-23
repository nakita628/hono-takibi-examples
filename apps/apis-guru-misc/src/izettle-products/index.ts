import { OpenAPIHono } from '@hono/zod-openapi'
import { organizationsHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', organizationsHandler).route('/', v1Handler)

export default app
