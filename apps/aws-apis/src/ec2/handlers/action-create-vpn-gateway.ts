import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateVpnGatewayRoute, postActionCreateVpnGatewayRoute } from '../routes'

export const getActionCreateVpnGatewayRouteHandler: RouteHandler<
  typeof getActionCreateVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpnGatewayRouteHandler: RouteHandler<
  typeof postActionCreateVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
