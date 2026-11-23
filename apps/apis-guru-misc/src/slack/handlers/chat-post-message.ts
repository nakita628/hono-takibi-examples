import type { RouteHandler } from '@hono/zod-openapi'
import type { postChatPostMessageRoute } from '../routes'

export const postChatPostMessageRouteHandler: RouteHandler<
  typeof postChatPostMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
