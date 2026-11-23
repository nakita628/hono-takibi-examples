import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateLoadBalancerRoute, postActionCreateLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateLoadBalancerHandler = app
  .openapi(getActionCreateLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
