import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteNatGatewayRoute, postActionDeleteNatGatewayRoute } from '../routes'

export const getActionDeleteNatGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteNatGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNatGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteNatGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
