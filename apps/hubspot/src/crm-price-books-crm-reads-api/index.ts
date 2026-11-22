import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, batchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', batchHandler)

export default app
