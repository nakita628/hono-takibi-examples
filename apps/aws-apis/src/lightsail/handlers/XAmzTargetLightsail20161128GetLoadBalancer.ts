import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetLoadBalancerHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
