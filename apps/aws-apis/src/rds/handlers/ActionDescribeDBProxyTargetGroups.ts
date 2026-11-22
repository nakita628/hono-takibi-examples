import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBProxyTargetGroupsRoute,
  postActionDescribeDBProxyTargetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBProxyTargetGroupsHandler = app
  .openapi(getActionDescribeDBProxyTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBProxyTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
