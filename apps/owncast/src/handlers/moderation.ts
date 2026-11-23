import type { RouteHandler } from '@hono/zod-openapi'
import type { getModerationChatUserUserIdRoute } from '../routes'

export const getModerationChatUserUserIdRouteHandler: RouteHandler<
  typeof getModerationChatUserUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
