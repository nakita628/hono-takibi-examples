import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeAlgorithmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeAlgorithmHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeAlgorithmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
