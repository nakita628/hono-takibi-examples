import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocationFetchMultiDailyMetricsTimeSeriesRoute,
  getV1NameGetDailyMetricsTimeSeriesRoute,
  getV1ParentSearchkeywordsImpressionsMonthlyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getV1LocationFetchMultiDailyMetricsTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetDailyMetricsTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSearchkeywordsImpressionsMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
