import { OpenAPIHono } from '@hono/zod-openapi'
import { smsHandler, voiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', smsHandler).route('/', voiceHandler)

export default app
