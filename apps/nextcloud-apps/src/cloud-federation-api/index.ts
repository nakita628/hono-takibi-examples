import { OpenAPIHono } from '@hono/zod-openapi'
import { requestHandlerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', requestHandlerHandler)

export default app
