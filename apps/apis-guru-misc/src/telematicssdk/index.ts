import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMobilesdkStageTrackGetTrackV1Route,
  getStatisticsV1ScoringsConsolidatedDailyRoute,
  getStatisticsV1ScoringsConsolidatedRoute,
  getStatisticsV1ScoringsIndividualDailyRoute,
  getStatisticsV1ScoringsIndividualIndexRoute,
  getStatisticsV1StatisticsConsolidatedDailyRoute,
  getStatisticsV1StatisticsConsolidatedRoute,
  getStatisticsV1StatisticsIndividualDailyIndexRoute,
  getStatisticsV1StatisticsIndividualIndexRoute,
} from './routes'
import {
  getMobilesdkStageTrackGetTrackV1RouteHandler,
  getStatisticsV1ScoringsConsolidatedDailyRouteHandler,
  getStatisticsV1ScoringsConsolidatedRouteHandler,
  getStatisticsV1ScoringsIndividualDailyRouteHandler,
  getStatisticsV1ScoringsIndividualIndexRouteHandler,
  getStatisticsV1StatisticsConsolidatedDailyRouteHandler,
  getStatisticsV1StatisticsConsolidatedRouteHandler,
  getStatisticsV1StatisticsIndividualDailyIndexRouteHandler,
  getStatisticsV1StatisticsIndividualIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMobilesdkStageTrackGetTrackV1Route, getMobilesdkStageTrackGetTrackV1RouteHandler)
  .openapi(
    getStatisticsV1ScoringsConsolidatedRoute,
    getStatisticsV1ScoringsConsolidatedRouteHandler,
  )
  .openapi(
    getStatisticsV1ScoringsConsolidatedDailyRoute,
    getStatisticsV1ScoringsConsolidatedDailyRouteHandler,
  )
  .openapi(
    getStatisticsV1ScoringsIndividualIndexRoute,
    getStatisticsV1ScoringsIndividualIndexRouteHandler,
  )
  .openapi(
    getStatisticsV1ScoringsIndividualDailyRoute,
    getStatisticsV1ScoringsIndividualDailyRouteHandler,
  )
  .openapi(
    getStatisticsV1StatisticsConsolidatedRoute,
    getStatisticsV1StatisticsConsolidatedRouteHandler,
  )
  .openapi(
    getStatisticsV1StatisticsConsolidatedDailyRoute,
    getStatisticsV1StatisticsConsolidatedDailyRouteHandler,
  )
  .openapi(
    getStatisticsV1StatisticsIndividualIndexRoute,
    getStatisticsV1StatisticsIndividualIndexRouteHandler,
  )
  .openapi(
    getStatisticsV1StatisticsIndividualDailyIndexRoute,
    getStatisticsV1StatisticsIndividualDailyIndexRouteHandler,
  )

export default app
