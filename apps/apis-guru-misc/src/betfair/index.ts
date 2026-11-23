import { OpenAPIHono } from '@hono/zod-openapi'
import { requestHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', requestHandler)

export default app
