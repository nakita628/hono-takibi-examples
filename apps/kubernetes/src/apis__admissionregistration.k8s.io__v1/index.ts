import { OpenAPIHono } from '@hono/zod-openapi'
import { admissionregistrationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', admissionregistrationV1Handler)

export default app
