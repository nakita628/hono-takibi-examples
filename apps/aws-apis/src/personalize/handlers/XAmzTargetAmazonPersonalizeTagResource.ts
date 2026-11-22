import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeTagResourceHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
