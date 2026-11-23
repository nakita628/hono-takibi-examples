import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
