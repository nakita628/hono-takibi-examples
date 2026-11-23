import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getListsIdCommentsSortRoute,
  getListsIdItemsTypeRoute,
  getListsIdLikesRoute,
  getListsIdRoute,
  getListsPopularRoute,
  getListsTrendingRoute,
} from '../routes'

export const getListsPopularRouteHandler: RouteHandler<typeof getListsPopularRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsTrendingRouteHandler: RouteHandler<typeof getListsTrendingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getListsIdRouteHandler: RouteHandler<typeof getListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdCommentsSortRouteHandler: RouteHandler<
  typeof getListsIdCommentsSortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdItemsTypeRouteHandler: RouteHandler<
  typeof getListsIdItemsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdLikesRouteHandler: RouteHandler<typeof getListsIdLikesRoute> = async (c) => {
  throw new Error('Not implemented')
}
