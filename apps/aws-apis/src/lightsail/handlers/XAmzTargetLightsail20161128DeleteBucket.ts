import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteBucketHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
