import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeUntagResourceHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
