import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeRouteTablesRoute, postActionDescribeRouteTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeRouteTablesHandler = app
  .openapi(getActionDescribeRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
