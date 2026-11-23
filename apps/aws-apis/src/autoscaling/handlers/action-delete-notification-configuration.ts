import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNotificationConfigurationRoute,
  postActionDeleteNotificationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNotificationConfigurationHandler = app
  .openapi(getActionDeleteNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
