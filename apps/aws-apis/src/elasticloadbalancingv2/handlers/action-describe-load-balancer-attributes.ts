import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoadBalancerAttributesRoute,
  postActionDescribeLoadBalancerAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLoadBalancerAttributesHandler = app
  .openapi(getActionDescribeLoadBalancerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoadBalancerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
