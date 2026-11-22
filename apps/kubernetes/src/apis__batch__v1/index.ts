import { OpenAPIHono } from '@hono/zod-openapi'
import { batchV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', batchV1Handler)

export default app
