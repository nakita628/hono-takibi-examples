import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeFeatureTransformationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeFeatureTransformationHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeFeatureTransformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
