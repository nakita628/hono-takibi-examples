import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAssociateAddressRoute, postActionAssociateAddressRoute } from '../routes'

export const getActionAssociateAddressRouteHandler: RouteHandler<
  typeof getActionAssociateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateAddressRouteHandler: RouteHandler<
  typeof postActionAssociateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
