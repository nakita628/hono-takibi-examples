import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', advancedHandler)

export default app
