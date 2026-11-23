import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetNotificationConfigurationRoute } from '../routes'

export const postGetNotificationConfigurationRouteHandler: RouteHandler<
  typeof postGetNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
