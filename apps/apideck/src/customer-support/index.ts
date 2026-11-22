import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', customersHandler)

export default app
