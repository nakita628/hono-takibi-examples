import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointServicesRoute,
  postActionDescribeVpcEndpointServicesRoute,
} from '../routes'

export const getActionDescribeVpcEndpointServicesRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointServicesRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
