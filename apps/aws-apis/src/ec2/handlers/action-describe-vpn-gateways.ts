import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpnGatewaysRoute,
  postActionDescribeVpnGatewaysRoute,
} from '../routes'

export const getActionDescribeVpnGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeVpnGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpnGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeVpnGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
