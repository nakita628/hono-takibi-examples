import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventNotificationsRoute } from './routes'
import { postEventNotificationsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postEventNotificationsRoute, postEventNotificationsRouteHandler)

export default app
