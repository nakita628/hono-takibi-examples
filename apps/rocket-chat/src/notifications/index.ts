import { OpenAPIHono } from '@hono/zod-openapi'
import { bannersHandler, pushNotificationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', bannersHandler).route('/', pushNotificationsHandler)

export default app
