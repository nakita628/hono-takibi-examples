import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NotificationsNotificationIdRoute, getV1NotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getV1NotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
