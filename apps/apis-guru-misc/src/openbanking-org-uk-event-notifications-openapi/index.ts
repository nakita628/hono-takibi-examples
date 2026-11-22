import { OpenAPIHono } from '@hono/zod-openapi'
import { eventNotificationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventNotificationHandler)

export default app
