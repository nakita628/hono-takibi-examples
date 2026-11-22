import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateLoadBalancerHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
