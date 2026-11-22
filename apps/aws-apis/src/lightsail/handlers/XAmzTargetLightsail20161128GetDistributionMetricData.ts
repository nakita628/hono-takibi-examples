import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDistributionMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetDistributionMetricDataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDistributionMetricDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
