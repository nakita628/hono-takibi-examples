import { OpenAPIHono } from '@hono/zod-openapi'
import { operationsHandler, servicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', operationsHandler).route('/', servicesHandler)

export default app
