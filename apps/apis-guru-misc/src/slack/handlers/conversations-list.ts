import type { RouteHandler } from '@hono/zod-openapi'
import type { getConversationsListRoute } from '../routes'

export const getConversationsListRouteHandler: RouteHandler<
  typeof getConversationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
