import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationsJsonRoute } from '../routes'

export const getNotificationsJsonRouteHandler: RouteHandler<
  typeof getNotificationsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
