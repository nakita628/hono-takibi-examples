import { OpenAPIHono } from '@hono/zod-openapi'
import { divisionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', divisionsHandler)

export default app
