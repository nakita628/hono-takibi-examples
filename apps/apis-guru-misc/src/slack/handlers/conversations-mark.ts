import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsMarkRoute } from '../routes'

export const postConversationsMarkRouteHandler: RouteHandler<
  typeof postConversationsMarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
