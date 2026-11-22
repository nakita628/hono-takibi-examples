import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EmailNotificationsNotificationIdRoute,
  getApiV2EmailNotificationsRoute,
  getApiV2EmailNotificationsShowManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailNotificationsHandler = app
  .openapi(getApiV2EmailNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EmailNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EmailNotificationsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
