import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUntagResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
