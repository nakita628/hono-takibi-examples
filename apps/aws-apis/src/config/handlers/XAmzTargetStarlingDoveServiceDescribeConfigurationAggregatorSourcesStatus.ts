import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
