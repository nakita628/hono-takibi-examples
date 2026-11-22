import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteBucketAccessKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteBucketAccessKeyHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteBucketAccessKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
