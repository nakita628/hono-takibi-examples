import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutConfigurationAggregatorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutConfigurationAggregatorHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutConfigurationAggregatorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
