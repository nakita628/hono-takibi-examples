import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedChatSessionRoute } from '../routes'

export const getSharedChatSessionRouteHandler: RouteHandler<
  typeof getSharedChatSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
