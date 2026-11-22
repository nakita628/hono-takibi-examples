import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3UpdateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3UpdateClusterHandler = app.openapi(
  postXAmzTargetAmazonDAXV3UpdateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
