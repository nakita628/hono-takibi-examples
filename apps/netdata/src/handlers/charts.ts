import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ChartRoute, getApiV1ChartsRoute } from '../routes'

const app = new OpenAPIHono()

export const chartsHandler = app
  .openapi(getApiV1ChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartRoute, (c) => {
    throw new Error('Not implemented')
  })
