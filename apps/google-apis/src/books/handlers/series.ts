import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksV1SeriesGetRoute, getBooksV1SeriesMembershipGetRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getBooksV1SeriesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1SeriesMembershipGetRoute, (c) => {
    throw new Error('Not implemented')
  })
