import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1BillingNotificationSettingsGetRoute,
  postV1BillingNotificationSettingsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingNotificationSettingsHandler = app
  .openapi(postV1BillingNotificationSettingsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingNotificationSettingsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
