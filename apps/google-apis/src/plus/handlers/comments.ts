import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommentsCommentIdRoute } from '../routes'

export const getCommentsCommentIdRouteHandler: RouteHandler<
  typeof getCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
