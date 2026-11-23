import type { RouteHandler } from '@hono/zod-openapi'
import type { postTestNotificationConfigurationRoute } from '../routes'

export const postTestNotificationConfigurationRouteHandler: RouteHandler<
  typeof postTestNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
