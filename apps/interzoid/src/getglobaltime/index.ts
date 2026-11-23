import { OpenAPIHono } from '@hono/zod-openapi'
import { getglobaltimeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getglobaltimeHandler)

export default app
