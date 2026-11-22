import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, batchHandler, searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', batchHandler).route('/', searchHandler)

export default app
