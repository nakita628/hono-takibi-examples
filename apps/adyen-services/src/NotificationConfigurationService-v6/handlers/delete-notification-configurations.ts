import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteNotificationConfigurationsRoute } from '../routes'

export const postDeleteNotificationConfigurationsRouteHandler: RouteHandler<
  typeof postDeleteNotificationConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
