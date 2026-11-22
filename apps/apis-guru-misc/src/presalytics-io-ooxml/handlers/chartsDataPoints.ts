import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsDataPointsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsDataPointsHandler = app.openapi(getChartsDataPointsIdRoute, (c) => {
  throw new Error('Not implemented')
})
