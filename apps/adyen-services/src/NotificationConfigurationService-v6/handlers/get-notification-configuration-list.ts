import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetNotificationConfigurationListRoute } from '../routes'

export const postGetNotificationConfigurationListRouteHandler: RouteHandler<
  typeof postGetNotificationConfigurationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
