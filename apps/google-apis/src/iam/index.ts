import { OpenAPIHono } from '@hono/zod-openapi'
import { policiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', policiesHandler)

export default app
