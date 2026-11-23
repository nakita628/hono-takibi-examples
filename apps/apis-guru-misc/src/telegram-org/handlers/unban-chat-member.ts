import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnbanChatMemberRoute } from '../routes'

export const postUnbanChatMemberRouteHandler: RouteHandler<
  typeof postUnbanChatMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
