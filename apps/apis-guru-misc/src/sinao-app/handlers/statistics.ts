import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppsAppIdStatisticsChartsTypeRoute,
  getAppsAppIdStatisticsTimetablePurchasesRoute,
  getAppsAppIdStatisticsTimetableSalesRoute,
  getAppsAppIdStatisticsVatRoute,
  getAppsAppIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getAppsAppIdStatisticsChartsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsTimetablePurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsTimetableSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdStatisticsVatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
