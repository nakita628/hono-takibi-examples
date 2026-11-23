import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetNotificationsRoute } from '../routes'

export const getGetNotificationsRouteHandler: RouteHandler<
  typeof getGetNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
