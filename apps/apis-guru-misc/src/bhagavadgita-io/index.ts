import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, authHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', authHandler)

export default app
