import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DetachInstancesFromLoadBalancerHandler = app.openapi(
  postXAmzTargetLightsail20161128DetachInstancesFromLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
