import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribePartnerEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribePartnerEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDescribePartnerEventSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
