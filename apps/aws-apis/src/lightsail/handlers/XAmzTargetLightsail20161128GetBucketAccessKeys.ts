import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBucketAccessKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetBucketAccessKeysHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBucketAccessKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
