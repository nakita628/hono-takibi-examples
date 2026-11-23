import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRecommendationsMoviesIdRoute,
  deleteRecommendationsShowsIdRoute,
  getRecommendationsMoviesRoute,
  getRecommendationsShowsRoute,
} from '../routes'

export const getRecommendationsMoviesRouteHandler: RouteHandler<
  typeof getRecommendationsMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecommendationsMoviesIdRouteHandler: RouteHandler<
  typeof deleteRecommendationsMoviesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecommendationsShowsRouteHandler: RouteHandler<
  typeof getRecommendationsShowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecommendationsShowsIdRouteHandler: RouteHandler<
  typeof deleteRecommendationsShowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
