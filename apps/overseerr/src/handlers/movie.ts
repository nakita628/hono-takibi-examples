import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMovieMovieIdRatingscombinedRoute,
  getMovieMovieIdRatingsRoute,
  getMovieMovieIdRecommendationsRoute,
  getMovieMovieIdRoute,
  getMovieMovieIdSimilarRoute,
} from '../routes'

export const getMovieMovieIdRouteHandler: RouteHandler<typeof getMovieMovieIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMovieMovieIdRecommendationsRouteHandler: RouteHandler<
  typeof getMovieMovieIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMovieMovieIdSimilarRouteHandler: RouteHandler<
  typeof getMovieMovieIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMovieMovieIdRatingsRouteHandler: RouteHandler<
  typeof getMovieMovieIdRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMovieMovieIdRatingscombinedRouteHandler: RouteHandler<
  typeof getMovieMovieIdRatingscombinedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
