import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CollectionsIdSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionSeriesHandler = app.openapi(getApiV1CollectionsIdSeriesRoute, (c) => {
  throw new Error('Not implemented')
})
