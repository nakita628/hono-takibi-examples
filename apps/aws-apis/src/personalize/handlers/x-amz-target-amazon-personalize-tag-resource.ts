import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeTagResourceHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
