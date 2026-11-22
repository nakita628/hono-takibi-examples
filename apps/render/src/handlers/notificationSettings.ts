import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationSettingsOverridesRoute,
  getNotificationSettingsOverridesServicesServiceIdRoute,
  getNotificationSettingsOwnersOwnerIdRoute,
  patchNotificationSettingsOverridesServicesServiceIdRoute,
  patchNotificationSettingsOwnersOwnerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationSettingsHandler = app
  .openapi(getNotificationSettingsOwnersOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationSettingsOwnersOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationSettingsOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationSettingsOverridesServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationSettingsOverridesServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
