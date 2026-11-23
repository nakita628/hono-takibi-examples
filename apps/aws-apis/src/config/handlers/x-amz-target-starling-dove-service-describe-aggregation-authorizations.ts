import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
