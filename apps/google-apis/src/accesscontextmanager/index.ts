import { OpenAPIHono } from '@hono/zod-openapi'
import { accessPoliciesHandler, operationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accessPoliciesHandler).route('/', operationsHandler)

export default app
