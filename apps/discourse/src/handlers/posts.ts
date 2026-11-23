import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePostsIdJsonRoute,
  getPostsIdJsonRoute,
  getPostsIdRepliesJsonRoute,
  putPostsIdJsonRoute,
  putPostsIdLockedJsonRoute,
} from '../routes'

export const getPostsIdJsonRouteHandler: RouteHandler<typeof getPostsIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPostsIdJsonRouteHandler: RouteHandler<typeof putPostsIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePostsIdJsonRouteHandler: RouteHandler<typeof deletePostsIdJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPostsIdRepliesJsonRouteHandler: RouteHandler<
  typeof getPostsIdRepliesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPostsIdLockedJsonRouteHandler: RouteHandler<
  typeof putPostsIdLockedJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
