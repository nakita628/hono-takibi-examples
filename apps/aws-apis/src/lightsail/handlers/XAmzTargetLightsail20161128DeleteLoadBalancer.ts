import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteLoadBalancerHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
