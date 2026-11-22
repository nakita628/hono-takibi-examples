import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsRowCollectionsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsRowCollectionsHandler = app.openapi(getChartsRowCollectionsIdRoute, (c) => {
  throw new Error('Not implemented')
})
