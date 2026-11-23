import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatisticsDatabasesRoute,
  getStatisticsMeasurementsRoute,
  getStatisticsMetricsRoute,
  getStatisticsTagsRoute,
  postStatisticsQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(postStatisticsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
