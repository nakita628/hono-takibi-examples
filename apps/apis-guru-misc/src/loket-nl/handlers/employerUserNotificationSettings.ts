import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersUsersUserIdNotificationsettingsRoute,
  patchProvidersEmployersUsersUserIdNotificationsettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerUserNotificationSettingsHandler = app
  .openapi(getProvidersEmployersUsersUserIdNotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersUsersUserIdNotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
