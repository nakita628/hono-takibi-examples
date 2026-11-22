import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteLoadBalancerRoute, postActionDeleteLoadBalancerRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLoadBalancerHandler = app
  .openapi(getActionDeleteLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLoadBalancerRoute, (c) => {
    throw new Error('Not implemented')
  })
