import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, checkoutHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', checkoutHandler)

export default app
