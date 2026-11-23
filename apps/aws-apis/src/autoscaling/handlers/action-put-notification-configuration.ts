import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutNotificationConfigurationRoute,
  postActionPutNotificationConfigurationRoute,
} from '../routes'

export const getActionPutNotificationConfigurationRouteHandler: RouteHandler<
  typeof getActionPutNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutNotificationConfigurationRouteHandler: RouteHandler<
  typeof postActionPutNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
