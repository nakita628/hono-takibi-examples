import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateNotificationConfigurationRoute } from '../routes'

export const postCreateNotificationConfigurationRouteHandler: RouteHandler<
  typeof postCreateNotificationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
