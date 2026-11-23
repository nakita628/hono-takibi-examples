import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocationFetchMultiDailyMetricsTimeSeriesRoute,
  getV1NameGetDailyMetricsTimeSeriesRoute,
  getV1ParentSearchkeywordsImpressionsMonthlyRoute,
} from './routes'
import {
  getV1LocationFetchMultiDailyMetricsTimeSeriesRouteHandler,
  getV1NameGetDailyMetricsTimeSeriesRouteHandler,
  getV1ParentSearchkeywordsImpressionsMonthlyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1LocationFetchMultiDailyMetricsTimeSeriesRoute,
    getV1LocationFetchMultiDailyMetricsTimeSeriesRouteHandler,
  )
  .openapi(getV1NameGetDailyMetricsTimeSeriesRoute, getV1NameGetDailyMetricsTimeSeriesRouteHandler)
  .openapi(
    getV1ParentSearchkeywordsImpressionsMonthlyRoute,
    getV1ParentSearchkeywordsImpressionsMonthlyRouteHandler,
  )

export default app
