import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssignPrivateNatGatewayAddressRoute,
  postActionAssignPrivateNatGatewayAddressRoute,
} from '../routes'

export const getActionAssignPrivateNatGatewayAddressRouteHandler: RouteHandler<
  typeof getActionAssignPrivateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssignPrivateNatGatewayAddressRouteHandler: RouteHandler<
  typeof postActionAssignPrivateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
