import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommentsCommentIdRoute,
  getCommentsRoute,
  postCommentsCommentIdDeleteRoute,
  postCommentsRoute,
} from '../routes'

export const postCommentsCommentIdDeleteRouteHandler: RouteHandler<
  typeof postCommentsCommentIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsCommentIdRouteHandler: RouteHandler<
  typeof getCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsRouteHandler: RouteHandler<typeof getCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsRouteHandler: RouteHandler<typeof postCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
