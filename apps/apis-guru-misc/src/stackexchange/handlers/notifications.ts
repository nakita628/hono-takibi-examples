import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationsRoute, getNotificationsUnreadRoute } from '../routes'

export const getNotificationsRouteHandler: RouteHandler<typeof getNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNotificationsUnreadRouteHandler: RouteHandler<
  typeof getNotificationsUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
