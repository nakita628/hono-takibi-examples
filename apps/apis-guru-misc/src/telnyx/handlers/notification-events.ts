import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationEventsHandler = app.openapi(getNotificationEventsRoute, (c) => {
  throw new Error('Not implemented')
})
