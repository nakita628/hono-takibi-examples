import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeDatasetHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
