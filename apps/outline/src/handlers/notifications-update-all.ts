import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsUpdateAllRoute } from '../routes'

export const postNotificationsUpdateAllRouteHandler: RouteHandler<
  typeof postNotificationsUpdateAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}
