import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeContributorInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeContributorInsightsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeContributorInsightsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
