import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsListRoute } from '../routes'

export const postNotificationsListRouteHandler: RouteHandler<
  typeof postNotificationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
