import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeriesRoute, getSeriesSerieRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieRoute, (c) => {
    throw new Error('Not implemented')
  })
