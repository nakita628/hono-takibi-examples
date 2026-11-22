import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutNotificationConfigurationRoute,
  postActionPutNotificationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionPutNotificationConfigurationHandler = app
  .openapi(getActionPutNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
