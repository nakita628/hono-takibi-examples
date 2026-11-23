import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNotificationConfigurationRoute,
  postActionDeleteNotificationConfigurationRoute,
} from '../routes'

export const getActionDeleteNotificationConfigurationRouteHandler: RouteHandler<
  typeof getActionDeleteNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNotificationConfigurationRouteHandler: RouteHandler<
  typeof postActionDeleteNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
