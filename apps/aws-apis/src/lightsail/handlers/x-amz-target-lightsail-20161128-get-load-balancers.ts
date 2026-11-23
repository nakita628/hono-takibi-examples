import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetLoadBalancersHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
