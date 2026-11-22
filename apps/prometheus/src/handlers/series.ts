import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeriesRoute, postSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
