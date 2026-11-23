import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteVpnGatewayRoute, postActionDeleteVpnGatewayRoute } from '../routes'

export const getActionDeleteVpnGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpnGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
