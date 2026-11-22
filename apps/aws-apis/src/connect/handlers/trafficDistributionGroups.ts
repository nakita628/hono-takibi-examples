import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrafficDistributionGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const trafficDistributionGroupsHandler = app.openapi(
  getTrafficDistributionGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
