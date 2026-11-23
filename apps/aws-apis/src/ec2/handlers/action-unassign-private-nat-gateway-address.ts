import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUnassignPrivateNatGatewayAddressRoute,
  postActionUnassignPrivateNatGatewayAddressRoute,
} from '../routes'

export const getActionUnassignPrivateNatGatewayAddressRouteHandler: RouteHandler<
  typeof getActionUnassignPrivateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUnassignPrivateNatGatewayAddressRouteHandler: RouteHandler<
  typeof postActionUnassignPrivateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
