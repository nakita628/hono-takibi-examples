import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3SeriesIdRoute,
  getApiV3SeriesIdRoute,
  getApiV3SeriesRoute,
  postApiV3SeriesRoute,
  putApiV3SeriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getApiV3SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
