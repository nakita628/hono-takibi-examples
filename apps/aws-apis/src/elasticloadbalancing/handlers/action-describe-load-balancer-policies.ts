import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoadBalancerPoliciesRoute,
  postActionDescribeLoadBalancerPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLoadBalancerPoliciesHandler = app
  .openapi(getActionDescribeLoadBalancerPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoadBalancerPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
