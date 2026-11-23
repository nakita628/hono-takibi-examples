import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetChatMemberRoute } from '../routes'

export const postGetChatMemberRouteHandler: RouteHandler<typeof postGetChatMemberRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
