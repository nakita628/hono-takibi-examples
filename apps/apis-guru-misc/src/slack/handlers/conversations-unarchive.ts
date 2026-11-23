import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsUnarchiveRoute } from '../routes'

export const postConversationsUnarchiveRouteHandler: RouteHandler<
  typeof postConversationsUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
