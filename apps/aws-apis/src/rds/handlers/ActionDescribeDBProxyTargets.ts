import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBProxyTargetsRoute,
  postActionDescribeDBProxyTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBProxyTargetsHandler = app
  .openapi(getActionDescribeDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBProxyTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
