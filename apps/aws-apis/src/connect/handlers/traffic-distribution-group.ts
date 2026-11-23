import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTrafficDistributionGroupTrafficDistributionGroupIdRoute,
  getTrafficDistributionGroupTrafficDistributionGroupIdRoute,
  putTrafficDistributionGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trafficDistributionGroupHandler = app
  .openapi(putTrafficDistributionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrafficDistributionGroupTrafficDistributionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficDistributionGroupTrafficDistributionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
