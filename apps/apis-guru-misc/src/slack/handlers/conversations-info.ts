import type { RouteHandler } from '@hono/zod-openapi'
import type { getConversationsInfoRoute } from '../routes'

export const getConversationsInfoRouteHandler: RouteHandler<
  typeof getConversationsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
