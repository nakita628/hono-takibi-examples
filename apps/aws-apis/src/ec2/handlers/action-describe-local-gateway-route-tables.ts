import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLocalGatewayRouteTablesRoute,
  postActionDescribeLocalGatewayRouteTablesRoute,
} from '../routes'

export const getActionDescribeLocalGatewayRouteTablesRouteHandler: RouteHandler<
  typeof getActionDescribeLocalGatewayRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLocalGatewayRouteTablesRouteHandler: RouteHandler<
  typeof postActionDescribeLocalGatewayRouteTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
