import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetachLoadBalancerFromSubnetsRoute,
  postActionDetachLoadBalancerFromSubnetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDetachLoadBalancerFromSubnetsHandler = app
  .openapi(getActionDetachLoadBalancerFromSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachLoadBalancerFromSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
