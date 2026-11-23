import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoadBalancersRoute,
  postActionDescribeLoadBalancersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLoadBalancersHandler = app
  .openapi(getActionDescribeLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
