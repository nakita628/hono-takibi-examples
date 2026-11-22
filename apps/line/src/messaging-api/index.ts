import { OpenAPIHono } from '@hono/zod-openapi'
import { messagingApiBlobHandler, messagingApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', messagingApiHandler).route('/', messagingApiBlobHandler)

export default app
