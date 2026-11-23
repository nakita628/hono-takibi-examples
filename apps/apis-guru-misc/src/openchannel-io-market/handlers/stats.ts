import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsSeriesPeriodFieldsRoute,
  getStatsTotalRoute,
  postStatsIncrementFieldRoute,
} from '../routes'

export const postStatsIncrementFieldRouteHandler: RouteHandler<
  typeof postStatsIncrementFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsSeriesPeriodFieldsRouteHandler: RouteHandler<
  typeof getStatsSeriesPeriodFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsTotalRouteHandler: RouteHandler<typeof getStatsTotalRoute> = async (c) => {
  throw new Error('Not implemented')
}
