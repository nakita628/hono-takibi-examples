import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', v1Handler)

export default app
