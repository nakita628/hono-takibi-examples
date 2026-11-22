import { OpenAPIHono } from '@hono/zod-openapi'
import { batchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', batchHandler)

export default app
