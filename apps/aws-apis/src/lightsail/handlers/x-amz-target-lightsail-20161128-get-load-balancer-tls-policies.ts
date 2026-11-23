import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancerTlsPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
