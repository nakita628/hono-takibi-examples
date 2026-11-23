import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationsCreateRoute } from '../routes'

export const postConversationsCreateRouteHandler: RouteHandler<
  typeof postConversationsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
