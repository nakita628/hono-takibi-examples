import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsNotificationIdLogsRoute,
  getNotificationsNotificationIdRoute,
  getNotificationsRoute,
  postNotificationsNotificationIdReplayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNotificationIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsNotificationIdReplayRoute, (c) => {
    throw new Error('Not implemented')
  })
