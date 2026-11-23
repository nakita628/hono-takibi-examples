import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsAddReactionRoute } from '../routes'

export const postCommentsAddReactionRouteHandler: RouteHandler<
  typeof postCommentsAddReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
