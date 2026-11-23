import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedDataSeriesRoute, getFeedDetailsRoute, getFeedListRoute } from '../routes'

const app = new OpenAPIHono()

export const feedHandler = app
  .openapi(getFeedDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedListRoute, (c) => {
    throw new Error('Not implemented')
  })
