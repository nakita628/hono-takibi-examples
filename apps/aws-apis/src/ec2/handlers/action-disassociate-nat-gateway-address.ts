import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateNatGatewayAddressRoute,
  postActionDisassociateNatGatewayAddressRoute,
} from '../routes'

export const getActionDisassociateNatGatewayAddressRouteHandler: RouteHandler<
  typeof getActionDisassociateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateNatGatewayAddressRouteHandler: RouteHandler<
  typeof postActionDisassociateNatGatewayAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
