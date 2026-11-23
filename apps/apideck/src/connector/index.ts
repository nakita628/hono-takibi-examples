import { OpenAPIHono } from '@hono/zod-openapi'
import { connectorHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', connectorHandler)

export default app
