import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShowsItemIdSimilarRoute,
  getShowsNextUpRoute,
  getShowsSeriesIdEpisodesRoute,
  getShowsSeriesIdSeasonsRoute,
  getShowsUpcomingRoute,
} from '../routes'

export const getShowsNextUpRouteHandler: RouteHandler<typeof getShowsNextUpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsUpcomingRouteHandler: RouteHandler<typeof getShowsUpcomingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShowsItemIdSimilarRouteHandler: RouteHandler<
  typeof getShowsItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsSeriesIdEpisodesRouteHandler: RouteHandler<
  typeof getShowsSeriesIdEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsSeriesIdSeasonsRouteHandler: RouteHandler<
  typeof getShowsSeriesIdSeasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
