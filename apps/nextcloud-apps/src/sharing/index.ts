import { OpenAPIHono } from '@hono/zod-openapi'
import { apiV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiV1Handler)

export default app
