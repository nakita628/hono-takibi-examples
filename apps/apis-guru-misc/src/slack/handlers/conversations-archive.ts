import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsArchiveRoute } from '../routes'

export const postConversationsArchiveRouteHandler: RouteHandler<
  typeof postConversationsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
