import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, v1InitializeCustomerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', v1InitializeCustomerHandler)

export default app
