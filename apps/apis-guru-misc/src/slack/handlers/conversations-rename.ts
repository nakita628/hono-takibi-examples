import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsRenameRoute } from '../routes'

export const postConversationsRenameRouteHandler: RouteHandler<
  typeof postConversationsRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
