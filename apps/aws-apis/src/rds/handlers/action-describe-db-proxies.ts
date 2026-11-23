import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBProxiesRoute, postActionDescribeDBProxiesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbProxiesHandler = app
  .openapi(getActionDescribeDBProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBProxiesRoute, (c) => {
    throw new Error('Not implemented')
  })
