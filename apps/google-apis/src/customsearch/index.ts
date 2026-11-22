import { OpenAPIHono } from '@hono/zod-openapi'
import { cseHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cseHandler)

export default app
