import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimeSeriesCrossRoute, getTimeSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const timeSeriesHandler = app
  .openapi(getTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeSeriesCrossRoute, (c) => {
    throw new Error('Not implemented')
  })
