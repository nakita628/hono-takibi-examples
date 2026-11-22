import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBucketsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetBucketsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBucketsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
