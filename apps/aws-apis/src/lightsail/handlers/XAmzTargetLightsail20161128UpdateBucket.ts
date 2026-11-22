import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UpdateBucketHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
