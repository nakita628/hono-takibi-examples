import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, providerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', providerHandler)

export default app
