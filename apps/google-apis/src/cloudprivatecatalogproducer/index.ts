import { OpenAPIHono } from '@hono/zod-openapi'
import { catalogsHandler, operationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', catalogsHandler).route('/', operationsHandler)

export default app
