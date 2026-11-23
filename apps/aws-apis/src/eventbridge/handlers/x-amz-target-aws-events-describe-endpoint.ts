import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribeEndpointHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
