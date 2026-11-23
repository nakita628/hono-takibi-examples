import { OpenAPIHono } from '@hono/zod-openapi'
import { getChartRoute, postChartRoute } from '../routes'

const app = new OpenAPIHono()

export const chartHandler = app
  .openapi(getChartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChartRoute, (c) => {
    throw new Error('Not implemented')
  })
