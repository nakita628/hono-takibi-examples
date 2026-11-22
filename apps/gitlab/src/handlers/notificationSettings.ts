import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupsIdNotificationSettingsRoute,
  getApiV4NotificationSettingsRoute,
  getApiV4ProjectsIdNotificationSettingsRoute,
  putApiV4GroupsIdNotificationSettingsRoute,
  putApiV4NotificationSettingsRoute,
  putApiV4ProjectsIdNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationSettingsHandler = app
  .openapi(getApiV4NotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4NotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
