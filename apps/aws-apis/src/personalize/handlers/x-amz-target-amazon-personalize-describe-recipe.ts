import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeRecipeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeRecipeHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeRecipeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
