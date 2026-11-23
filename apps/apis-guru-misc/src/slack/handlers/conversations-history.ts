import type { RouteHandler } from '@hono/zod-openapi'
import type { getConversationsHistoryRoute } from '../routes'

export const getConversationsHistoryRouteHandler: RouteHandler<
  typeof getConversationsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
