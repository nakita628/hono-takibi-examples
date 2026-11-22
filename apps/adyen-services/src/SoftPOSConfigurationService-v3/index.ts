import { OpenAPIHono } from '@hono/zod-openapi'
import { sessionAuthenticationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sessionAuthenticationHandler)

export default app
