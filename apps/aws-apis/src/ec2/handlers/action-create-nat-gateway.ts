import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateNatGatewayRoute, postActionCreateNatGatewayRoute } from '../routes'

export const getActionCreateNatGatewayRouteHandler: RouteHandler<
  typeof getActionCreateNatGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNatGatewayRouteHandler: RouteHandler<
  typeof postActionCreateNatGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
