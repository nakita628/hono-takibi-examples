import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointConnectionsRoute,
  postActionDescribeVpcEndpointConnectionsRoute,
} from '../routes'

export const getActionDescribeVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointConnectionsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
