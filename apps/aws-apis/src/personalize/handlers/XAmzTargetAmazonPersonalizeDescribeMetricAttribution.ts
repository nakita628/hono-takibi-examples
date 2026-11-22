import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeMetricAttributionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeMetricAttributionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeMetricAttributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
