import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler, batchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', advancedHandler).route('/', batchHandler)

export default app
