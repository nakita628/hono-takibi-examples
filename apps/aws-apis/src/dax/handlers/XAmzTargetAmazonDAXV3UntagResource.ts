import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3UntagResourceHandler = app.openapi(
  postXAmzTargetAmazonDAXV3UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
