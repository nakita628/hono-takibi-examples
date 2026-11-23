import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestrictChatMemberRoute } from '../routes'

export const postRestrictChatMemberRouteHandler: RouteHandler<
  typeof postRestrictChatMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
