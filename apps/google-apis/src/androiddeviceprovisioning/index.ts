import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, partnersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', customersHandler).route('/', partnersHandler)

export default app
