import { OpenAPIHono } from '@hono/zod-openapi'
import { healthHandler, readyHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', healthHandler).route('/', readyHandler).route('/', v1Handler)

export default app
