import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstanceMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetInstanceMetricDataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstanceMetricDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
