import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteFileCommentReactionsIdRoute, postFileCommentReactionsRoute } from '../routes'

export const postFileCommentReactionsRouteHandler: RouteHandler<
  typeof postFileCommentReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFileCommentReactionsIdRouteHandler: RouteHandler<
  typeof deleteFileCommentReactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
