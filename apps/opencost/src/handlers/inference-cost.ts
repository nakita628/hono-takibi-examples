import { OpenAPIHono } from '@hono/zod-openapi'
import { getInferenceCostTimeseriesRoute, getInferenceCostTotalRoute } from '../routes'

const app = new OpenAPIHono()

export const inferenceCostHandler = app
  .openapi(getInferenceCostTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceCostTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
