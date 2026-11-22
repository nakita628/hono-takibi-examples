import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateBucketRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateBucketHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateBucketRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
