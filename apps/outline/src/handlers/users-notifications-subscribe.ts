import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersNotificationsSubscribeRoute } from '../routes'

export const postUsersNotificationsSubscribeRouteHandler: RouteHandler<
  typeof postUsersNotificationsSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
