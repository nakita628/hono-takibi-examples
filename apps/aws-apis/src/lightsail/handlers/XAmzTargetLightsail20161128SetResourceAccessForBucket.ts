import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128SetResourceAccessForBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128SetResourceAccessForBucketHandler = app.openapi(
  postXAmzTargetLightsail20161128SetResourceAccessForBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
