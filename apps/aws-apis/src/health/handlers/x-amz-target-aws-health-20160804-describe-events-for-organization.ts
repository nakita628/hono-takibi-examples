import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHealth20160804DescribeEventsForOrganizationHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventsForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
