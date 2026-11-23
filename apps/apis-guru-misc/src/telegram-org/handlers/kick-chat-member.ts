import type { RouteHandler } from '@hono/zod-openapi'
import type { postKickChatMemberRoute } from '../routes'

export const postKickChatMemberRouteHandler: RouteHandler<typeof postKickChatMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
