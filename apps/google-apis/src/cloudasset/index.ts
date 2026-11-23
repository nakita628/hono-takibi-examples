import { OpenAPIHono } from '@hono/zod-openapi'
import { v1p7beta1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1p7beta1Handler)

export default app
