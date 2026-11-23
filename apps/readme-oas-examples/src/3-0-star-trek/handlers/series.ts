import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeriesRoute, getSeriesSearchRoute, postSeriesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
