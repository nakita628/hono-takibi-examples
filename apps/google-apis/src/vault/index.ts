import { OpenAPIHono } from '@hono/zod-openapi'
import { mattersHandler, operationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mattersHandler).route('/', operationsHandler)

export default app
