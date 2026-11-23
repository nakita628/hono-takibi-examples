import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationEventsRoute } from '../routes'

export const getNotificationEventsRouteHandler: RouteHandler<
  typeof getNotificationEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
