import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AttachInstancesToLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128AttachInstancesToLoadBalancerHandler = app.openapi(
  postXAmzTargetLightsail20161128AttachInstancesToLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
