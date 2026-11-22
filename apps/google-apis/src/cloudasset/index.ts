import { OpenAPIHono } from '@hono/zod-openapi'
import { operationsHandler, v1p7beta1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', operationsHandler).route('/', v1p7beta1Handler)

export default app
