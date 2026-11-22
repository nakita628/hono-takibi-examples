import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotificationsNotificationIdLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationLogsHandler = app.openapi(getNotificationsNotificationIdLogsRoute, (c) => {
  throw new Error('Not implemented')
})
