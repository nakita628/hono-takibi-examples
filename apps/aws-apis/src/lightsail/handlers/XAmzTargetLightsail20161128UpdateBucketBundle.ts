import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateBucketBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UpdateBucketBundleHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateBucketBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
