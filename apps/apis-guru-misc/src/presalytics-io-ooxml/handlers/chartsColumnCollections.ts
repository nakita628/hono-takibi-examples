import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsColumnCollectionsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsColumnCollectionsHandler = app.openapi(
  getChartsColumnCollectionsIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
