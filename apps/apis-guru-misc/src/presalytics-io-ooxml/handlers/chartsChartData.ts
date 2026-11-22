import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartsChartDataIdRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsChartDataHandler = app.openapi(getChartsChartDataIdRoute, (c) => {
  throw new Error('Not implemented')
})
