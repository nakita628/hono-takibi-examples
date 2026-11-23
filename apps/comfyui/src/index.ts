import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, healthHandler, internalHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', healthHandler).route('/', internalHandler)

export default app
