import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateNotificationConfigurationRoute,
  postDeleteNotificationConfigurationsRoute,
  postGetNotificationConfigurationListRoute,
  postGetNotificationConfigurationRoute,
  postTestNotificationConfigurationRoute,
  postUpdateNotificationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postCreateNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteNotificationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetNotificationConfigurationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpdateNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
