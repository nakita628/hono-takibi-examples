import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointServicePermissionsRoute,
  postActionDescribeVpcEndpointServicePermissionsRoute,
} from '../routes'

export const getActionDescribeVpcEndpointServicePermissionsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointServicePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointServicePermissionsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointServicePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
