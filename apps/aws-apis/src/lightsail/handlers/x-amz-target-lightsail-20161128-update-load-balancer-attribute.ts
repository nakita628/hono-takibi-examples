import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateLoadBalancerAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateLoadBalancerAttributeHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateLoadBalancerAttributeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
