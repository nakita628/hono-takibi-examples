import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpcEndpointsRoute,
  postActionDescribeVpcEndpointsRoute,
} from '../routes'

export const getActionDescribeVpcEndpointsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcEndpointsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
