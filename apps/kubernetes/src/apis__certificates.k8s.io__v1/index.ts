import { OpenAPIHono } from '@hono/zod-openapi'
import { certificatesV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', certificatesV1Handler)

export default app
