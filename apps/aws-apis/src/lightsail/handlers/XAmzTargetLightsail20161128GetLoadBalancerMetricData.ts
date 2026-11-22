import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancerMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetLoadBalancerMetricDataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancerMetricDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
