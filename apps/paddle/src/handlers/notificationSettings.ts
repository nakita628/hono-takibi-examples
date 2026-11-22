import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationSettingsNotificationSettingIdRoute,
  getNotificationSettingsNotificationSettingIdRoute,
  getNotificationSettingsRoute,
  patchNotificationSettingsNotificationSettingIdRoute,
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
  .openapi(getNotificationSettingsNotificationSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationSettingsNotificationSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationSettingsNotificationSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
