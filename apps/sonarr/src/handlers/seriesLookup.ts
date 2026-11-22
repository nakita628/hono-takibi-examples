import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3SeriesLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const seriesLookupHandler = app.openapi(getApiV3SeriesLookupRoute, (c) => {
  throw new Error('Not implemented')
})
