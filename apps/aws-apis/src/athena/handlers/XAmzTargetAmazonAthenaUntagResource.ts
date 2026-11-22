import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUntagResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
