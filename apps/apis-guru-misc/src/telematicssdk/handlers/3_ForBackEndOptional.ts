import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatisticsV1ScoringsConsolidatedDailyRoute,
  getStatisticsV1ScoringsConsolidatedRoute,
  getStatisticsV1StatisticsConsolidatedDailyRoute,
  getStatisticsV1StatisticsConsolidatedRoute,
} from '../routes'

export const getStatisticsV1ScoringsConsolidatedRouteHandler: RouteHandler<
  typeof getStatisticsV1ScoringsConsolidatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsV1ScoringsConsolidatedDailyRouteHandler: RouteHandler<
  typeof getStatisticsV1ScoringsConsolidatedDailyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsV1StatisticsConsolidatedRouteHandler: RouteHandler<
  typeof getStatisticsV1StatisticsConsolidatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatisticsV1StatisticsConsolidatedDailyRouteHandler: RouteHandler<
  typeof getStatisticsV1StatisticsConsolidatedDailyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
