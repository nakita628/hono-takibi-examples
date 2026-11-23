import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersConversationsRoute } from '../routes'

export const getUsersConversationsRouteHandler: RouteHandler<
  typeof getUsersConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
