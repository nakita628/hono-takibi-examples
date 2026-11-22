import { OpenAPIHono } from '@hono/zod-openapi'
import { messageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', messageHandler)

export default app
