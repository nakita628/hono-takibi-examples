import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeRouteTablesRoute, postActionDescribeRouteTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeRouteTablesHandler = app
  .openapi(getActionDescribeRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
