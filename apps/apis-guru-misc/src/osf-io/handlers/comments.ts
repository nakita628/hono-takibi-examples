import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommentsCommentIdIndexRoute,
  getCommentsCommentIdIndexRoute,
  putCommentsCommentIdIndexRoute,
} from '../routes'

export const deleteCommentsCommentIdIndexRouteHandler: RouteHandler<
  typeof deleteCommentsCommentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsCommentIdIndexRouteHandler: RouteHandler<
  typeof getCommentsCommentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommentsCommentIdIndexRouteHandler: RouteHandler<
  typeof putCommentsCommentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
