import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachVpnGatewayRoute, postActionDetachVpnGatewayRoute } from '../routes'

export const getActionDetachVpnGatewayRouteHandler: RouteHandler<
  typeof getActionDetachVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachVpnGatewayRouteHandler: RouteHandler<
  typeof postActionDetachVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
