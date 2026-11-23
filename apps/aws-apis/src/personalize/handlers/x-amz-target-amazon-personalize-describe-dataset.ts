import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeDatasetHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
