import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DetachElasticLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DetachElasticLoadBalancerHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DetachElasticLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
