import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersNotificationsetsNotificationSetIdRoute,
  getProvidersProviderIdNotificationsetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationSetsHandler = app
  .openapi(getProvidersNotificationsetsNotificationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdNotificationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
