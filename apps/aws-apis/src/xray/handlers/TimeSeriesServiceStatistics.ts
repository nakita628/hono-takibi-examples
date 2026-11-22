import { OpenAPIHono } from '@hono/zod-openapi'
import { postTimeSeriesServiceStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const TimeSeriesServiceStatisticsHandler = app.openapi(
  postTimeSeriesServiceStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
