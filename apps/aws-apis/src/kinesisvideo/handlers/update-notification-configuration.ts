import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateNotificationConfigurationRoute } from '../routes'

export const postUpdateNotificationConfigurationRouteHandler: RouteHandler<
  typeof postUpdateNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
