import { OpenAPIHono } from '@hono/zod-openapi'
import { openaiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', openaiHandler)

export default app
