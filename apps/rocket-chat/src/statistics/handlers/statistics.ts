import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatisticsListRoute,
  getApiV1StatisticsRoute,
  postApiV1StatisticsTelemetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getApiV1StatisticsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatisticsTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
