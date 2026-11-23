import { OpenAPIHono } from '@hono/zod-openapi'
import { eventNotificationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventNotificationsHandler)

export default app
