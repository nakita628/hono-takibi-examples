import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlbumsItemIdInstantMixRoute, getAlbumsItemIdSimilarRoute } from '../routes'

export const getAlbumsItemIdInstantMixRouteHandler: RouteHandler<
  typeof getAlbumsItemIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlbumsItemIdSimilarRouteHandler: RouteHandler<
  typeof getAlbumsItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
