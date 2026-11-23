import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPostsIdsCommentsRoute,
  getPostsIdsRevisionsRoute,
  getPostsIdsRoute,
  getPostsIdsSuggestedEditsRoute,
  getPostsRoute,
  postPostsIdCommentsAddRoute,
} from '../routes'

export const getPostsRouteHandler: RouteHandler<typeof getPostsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPostsIdsRouteHandler: RouteHandler<typeof getPostsIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPostsIdsCommentsRouteHandler: RouteHandler<
  typeof getPostsIdsCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPostsIdsRevisionsRouteHandler: RouteHandler<
  typeof getPostsIdsRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPostsIdsSuggestedEditsRouteHandler: RouteHandler<
  typeof getPostsIdsSuggestedEditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPostsIdCommentsAddRouteHandler: RouteHandler<
  typeof postPostsIdCommentsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}
