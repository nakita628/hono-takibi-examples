import { OpenAPIHono } from '@hono/zod-openapi'
import { webfontsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webfontsHandler)

export default app
