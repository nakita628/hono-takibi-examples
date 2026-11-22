import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBucketMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetBucketMetricDataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBucketMetricDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
