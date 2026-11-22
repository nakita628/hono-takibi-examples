import { OpenAPIHono } from '@hono/zod-openapi'
import { requestTagHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', requestTagHandler)

export default app
