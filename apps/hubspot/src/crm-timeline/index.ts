import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, batchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', advancedHandler).route('/', batchHandler)

export default app
