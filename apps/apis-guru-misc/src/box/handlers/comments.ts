import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommentsCommentIdRoute,
  getCommentsCommentIdRoute,
  postCommentsRoute,
  putCommentsCommentIdRoute,
} from '../routes'

export const postCommentsRouteHandler: RouteHandler<typeof postCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsCommentIdRouteHandler: RouteHandler<
  typeof getCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommentsCommentIdRouteHandler: RouteHandler<
  typeof putCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
