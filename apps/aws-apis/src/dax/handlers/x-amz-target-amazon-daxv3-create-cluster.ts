import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3CreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3CreateClusterHandler = app.openapi(
  postXAmzTargetAmazonDAXV3CreateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
