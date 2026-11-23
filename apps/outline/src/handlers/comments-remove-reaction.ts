import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommentsRemoveReactionRoute } from '../routes'

export const postCommentsRemoveReactionRouteHandler: RouteHandler<
  typeof postCommentsRemoveReactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
