import { OpenAPIHono } from '@hono/zod-openapi'
import { apiregistrationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiregistrationV1Handler)

export default app
