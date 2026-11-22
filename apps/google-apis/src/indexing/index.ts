import { OpenAPIHono } from '@hono/zod-openapi'
import { urlNotificationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', urlNotificationsHandler)

export default app
