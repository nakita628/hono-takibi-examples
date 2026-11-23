import { OpenAPIHono } from '@hono/zod-openapi'
import { tenantIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tenantIdHandler)

export default app
