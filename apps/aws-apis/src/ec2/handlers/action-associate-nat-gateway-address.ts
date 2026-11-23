import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateNatGatewayAddressRoute,
  postActionAssociateNatGatewayAddressRoute,
} from '../routes'

export const getActionAssociateNatGatewayAddressRouteHandler: RouteHandler<
  typeof getActionAssociateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateNatGatewayAddressRouteHandler: RouteHandler<
  typeof postActionAssociateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
