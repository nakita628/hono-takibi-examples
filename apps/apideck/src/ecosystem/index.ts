import { OpenAPIHono } from '@hono/zod-openapi'
import { ecosystemsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ecosystemsHandler)

export default app
