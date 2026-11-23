import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218AttachElasticLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218AttachElasticLoadBalancerHandler = app.openapi(
  postXAmzTargetOpsWorks20130218AttachElasticLoadBalancerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
