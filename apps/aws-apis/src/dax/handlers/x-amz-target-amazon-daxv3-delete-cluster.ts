import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DeleteClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DeleteClusterHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DeleteClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
