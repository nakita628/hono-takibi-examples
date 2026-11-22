import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrafficDistributionIdRoute, putTrafficDistributionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const trafficDistributionHandler = app
  .openapi(getTrafficDistributionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrafficDistributionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
