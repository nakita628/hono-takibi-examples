import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTransitGatewayRouteTablesRoute,
  postActionDescribeTransitGatewayRouteTablesRoute,
} from '../routes'

export const getActionDescribeTransitGatewayRouteTablesRouteHandler: RouteHandler<
  typeof getActionDescribeTransitGatewayRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTransitGatewayRouteTablesRouteHandler: RouteHandler<
  typeof postActionDescribeTransitGatewayRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
