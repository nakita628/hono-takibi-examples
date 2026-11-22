import { OpenAPIHono } from '@hono/zod-openapi'
import { apiV1Handler, authHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', authHandler).route('/', apiV1Handler)

export default app
