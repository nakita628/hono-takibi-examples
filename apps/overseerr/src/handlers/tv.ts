import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTvTvIdRatingsRoute,
  getTvTvIdRecommendationsRoute,
  getTvTvIdRoute,
  getTvTvIdSeasonSeasonIdRoute,
  getTvTvIdSimilarRoute,
} from '../routes'

export const getTvTvIdRouteHandler: RouteHandler<typeof getTvTvIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTvTvIdSeasonSeasonIdRouteHandler: RouteHandler<
  typeof getTvTvIdSeasonSeasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTvTvIdRecommendationsRouteHandler: RouteHandler<
  typeof getTvTvIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTvTvIdSimilarRouteHandler: RouteHandler<typeof getTvTvIdSimilarRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTvTvIdRatingsRouteHandler: RouteHandler<typeof getTvTvIdRatingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
