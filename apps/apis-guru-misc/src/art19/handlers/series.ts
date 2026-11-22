import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeriesIdRoute, getSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
