import type { RouteHandler } from '@hono/zod-openapi'
import type { postPromoteChatMemberRoute } from '../routes'

export const postPromoteChatMemberRouteHandler: RouteHandler<
  typeof postPromoteChatMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
