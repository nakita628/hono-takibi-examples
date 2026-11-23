import { OpenAPIHono } from '@hono/zod-openapi'
import { authHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authHandler)

export default app
