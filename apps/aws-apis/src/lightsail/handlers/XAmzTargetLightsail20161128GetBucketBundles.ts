import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBucketBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetBucketBundlesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBucketBundlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
