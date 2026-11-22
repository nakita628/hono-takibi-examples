import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
