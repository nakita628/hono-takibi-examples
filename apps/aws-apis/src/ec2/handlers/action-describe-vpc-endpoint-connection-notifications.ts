import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointConnectionNotificationsRoute,
  postActionDescribeVpcEndpointConnectionNotificationsRoute,
} from '../routes'

export const getActionDescribeVpcEndpointConnectionNotificationsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointConnectionNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointConnectionNotificationsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointConnectionNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
