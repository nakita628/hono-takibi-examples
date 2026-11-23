import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimilarityBySongRoute, postSimilarityByContentRoute } from '../routes'

export const postSimilarityByContentRouteHandler: RouteHandler<
  typeof postSimilarityByContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimilarityBySongRouteHandler: RouteHandler<
  typeof getSimilarityBySongRoute
> = async (c) => {
  throw new Error('Not implemented')
}
