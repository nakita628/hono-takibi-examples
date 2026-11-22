import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBProxyEndpointsRoute,
  postActionDescribeDBProxyEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBProxyEndpointsHandler = app
  .openapi(getActionDescribeDBProxyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBProxyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
