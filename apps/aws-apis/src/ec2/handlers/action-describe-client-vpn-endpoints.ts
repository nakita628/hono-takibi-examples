import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClientVpnEndpointsRoute,
  postActionDescribeClientVpnEndpointsRoute,
} from '../routes'

export const getActionDescribeClientVpnEndpointsRouteHandler: RouteHandler<
  typeof getActionDescribeClientVpnEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClientVpnEndpointsRouteHandler: RouteHandler<
  typeof postActionDescribeClientVpnEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
