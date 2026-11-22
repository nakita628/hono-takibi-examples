import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3TagResourceHandler = app.openapi(
  postXAmzTargetAmazonDAXV3TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
