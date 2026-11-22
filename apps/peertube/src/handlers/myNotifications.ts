import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1UsersMeNotificationsRoute,
  postApiV1UsersMeNotificationsReadAllRoute,
  postApiV1UsersMeNotificationsReadRoute,
  putApiV1UsersMeNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myNotificationsHandler = app
  .openapi(getApiV1UsersMeNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeNotificationsReadAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
