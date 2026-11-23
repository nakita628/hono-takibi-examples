import { OpenAPIHono } from '@hono/zod-openapi'
import { botsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', botsHandler)

export default app
