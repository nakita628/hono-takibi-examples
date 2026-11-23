import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsUpdateRoute } from '../routes'

export const postNotificationsUpdateRouteHandler: RouteHandler<
  typeof postNotificationsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
