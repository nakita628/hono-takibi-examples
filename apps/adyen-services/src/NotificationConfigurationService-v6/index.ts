import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateNotificationConfigurationRoute,
  postDeleteNotificationConfigurationsRoute,
  postGetNotificationConfigurationListRoute,
  postGetNotificationConfigurationRoute,
  postTestNotificationConfigurationRoute,
  postUpdateNotificationConfigurationRoute,
} from './routes'
import {
  postCreateNotificationConfigurationRouteHandler,
  postDeleteNotificationConfigurationsRouteHandler,
  postGetNotificationConfigurationListRouteHandler,
  postGetNotificationConfigurationRouteHandler,
  postTestNotificationConfigurationRouteHandler,
  postUpdateNotificationConfigurationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postCreateNotificationConfigurationRoute,
    postCreateNotificationConfigurationRouteHandler,
  )
  .openapi(
    postDeleteNotificationConfigurationsRoute,
    postDeleteNotificationConfigurationsRouteHandler,
  )
  .openapi(postGetNotificationConfigurationRoute, postGetNotificationConfigurationRouteHandler)
  .openapi(
    postGetNotificationConfigurationListRoute,
    postGetNotificationConfigurationListRouteHandler,
  )
  .openapi(postTestNotificationConfigurationRoute, postTestNotificationConfigurationRouteHandler)
  .openapi(
    postUpdateNotificationConfigurationRoute,
    postUpdateNotificationConfigurationRouteHandler,
  )

export default app
