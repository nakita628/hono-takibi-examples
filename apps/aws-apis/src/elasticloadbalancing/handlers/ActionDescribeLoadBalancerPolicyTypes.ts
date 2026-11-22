import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoadBalancerPolicyTypesRoute,
  postActionDescribeLoadBalancerPolicyTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLoadBalancerPolicyTypesHandler = app
  .openapi(getActionDescribeLoadBalancerPolicyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoadBalancerPolicyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
