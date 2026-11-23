import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateNotificationsRoute } from '../routes'

export const postUpdateNotificationsRouteHandler: RouteHandler<
  typeof postUpdateNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
