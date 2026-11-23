import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointServiceConfigurationsRoute,
  postActionDescribeVpcEndpointServiceConfigurationsRoute,
} from '../routes'

export const getActionDescribeVpcEndpointServiceConfigurationsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointServiceConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointServiceConfigurationsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointServiceConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
