import { OpenAPIHono } from '@hono/zod-openapi'
import { getBookSeriesRoute, getBookSeriesSearchRoute, postBookSeriesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const bookSeriesHandler = app
  .openapi(getBookSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookSeriesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
