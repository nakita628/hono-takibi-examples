import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutConfigurationAggregatorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutConfigurationAggregatorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
