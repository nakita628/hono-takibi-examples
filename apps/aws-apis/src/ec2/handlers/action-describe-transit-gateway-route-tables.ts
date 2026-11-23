import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayRouteTablesRoute,
  postActionDescribeTransitGatewayRouteTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayRouteTablesHandler = app
  .openapi(getActionDescribeTransitGatewayRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayRouteTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
