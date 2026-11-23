import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationSettingsIdRoute,
  getNotificationSettingsIdRoute,
  getNotificationSettingsRoute,
  postNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationSettingsHandler = app
  .openapi(getNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
