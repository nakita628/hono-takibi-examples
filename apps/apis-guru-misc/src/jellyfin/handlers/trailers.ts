import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrailersItemIdSimilarRoute, getTrailersRoute } from '../routes'

export const getTrailersRouteHandler: RouteHandler<typeof getTrailersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrailersItemIdSimilarRouteHandler: RouteHandler<
  typeof getTrailersItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}
