import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsLeaveRoute } from '../routes'

export const postConversationsLeaveRouteHandler: RouteHandler<
  typeof postConversationsLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
