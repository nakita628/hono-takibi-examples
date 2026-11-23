import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetChatMembersCountRoute } from '../routes'

export const postGetChatMembersCountRouteHandler: RouteHandler<
  typeof postGetChatMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
