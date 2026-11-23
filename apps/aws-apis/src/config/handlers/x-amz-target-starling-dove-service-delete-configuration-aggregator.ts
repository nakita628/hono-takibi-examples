import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
