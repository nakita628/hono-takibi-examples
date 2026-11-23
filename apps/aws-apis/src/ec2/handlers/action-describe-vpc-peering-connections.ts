import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcPeeringConnectionsRoute,
  postActionDescribeVpcPeeringConnectionsRoute,
} from '../routes'

export const getActionDescribeVpcPeeringConnectionsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcPeeringConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcPeeringConnectionsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcPeeringConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
