import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersNotificationsUnsubscribeRoute } from '../routes'

export const postUsersNotificationsUnsubscribeRouteHandler: RouteHandler<
  typeof postUsersNotificationsUnsubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
