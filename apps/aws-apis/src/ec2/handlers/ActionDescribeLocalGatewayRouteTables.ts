import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewayRouteTablesRoute,
  postActionDescribeLocalGatewayRouteTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLocalGatewayRouteTablesHandler = app
  .openapi(getActionDescribeLocalGatewayRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewayRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
