import type { RouteHandler } from '@hono/zod-openapi'
import type { getPostsJsonRoute, postPostsJsonRoute } from '../routes'

export const getPostsJsonRouteHandler: RouteHandler<typeof getPostsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPostsJsonRouteHandler: RouteHandler<typeof postPostsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
