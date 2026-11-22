import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoadBalancerTargetGroupsRoute,
  postActionDescribeLoadBalancerTargetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLoadBalancerTargetGroupsHandler = app
  .openapi(getActionDescribeLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoadBalancerTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
