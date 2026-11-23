import { OpenAPIHono } from '@hono/zod-openapi'
import { trcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', trcerHandler)

export default app
