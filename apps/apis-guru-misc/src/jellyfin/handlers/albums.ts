import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlbumsIdInstantMixRoute, getAlbumsItemIdSimilarRoute } from '../routes'

export const getAlbumsIdInstantMixRouteHandler: RouteHandler<
  typeof getAlbumsIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlbumsItemIdSimilarRouteHandler: RouteHandler<
  typeof getAlbumsItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
