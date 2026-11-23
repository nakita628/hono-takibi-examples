import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommentsIdLikeRoute,
  deleteCommentsIdRoute,
  getCommentsIdItemRoute,
  getCommentsIdLikesRoute,
  getCommentsIdRepliesRoute,
  getCommentsIdRoute,
  getCommentsRecentCommentTypeTypeRoute,
  getCommentsTrendingCommentTypeTypeRoute,
  getCommentsUpdatesCommentTypeTypeRoute,
  postCommentsIdLikeRoute,
  postCommentsIdRepliesRoute,
  postCommentsRoute,
  putCommentsIdRoute,
} from '../routes'

export const postCommentsRouteHandler: RouteHandler<typeof postCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsRecentCommentTypeTypeRouteHandler: RouteHandler<
  typeof getCommentsRecentCommentTypeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsTrendingCommentTypeTypeRouteHandler: RouteHandler<
  typeof getCommentsTrendingCommentTypeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsUpdatesCommentTypeTypeRouteHandler: RouteHandler<
  typeof getCommentsUpdatesCommentTypeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommentsIdRouteHandler: RouteHandler<typeof deleteCommentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommentsIdRouteHandler: RouteHandler<typeof getCommentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommentsIdRouteHandler: RouteHandler<typeof putCommentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsIdItemRouteHandler: RouteHandler<typeof getCommentsIdItemRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCommentsIdLikeRouteHandler: RouteHandler<
  typeof deleteCommentsIdLikeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsIdLikeRouteHandler: RouteHandler<typeof postCommentsIdLikeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommentsIdLikesRouteHandler: RouteHandler<typeof getCommentsIdLikesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommentsIdRepliesRouteHandler: RouteHandler<
  typeof getCommentsIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsIdRepliesRouteHandler: RouteHandler<
  typeof postCommentsIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
