import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAllocateAddressRoute, postActionAllocateAddressRoute } from '../routes'

export const getActionAllocateAddressRouteHandler: RouteHandler<
  typeof getActionAllocateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAllocateAddressRouteHandler: RouteHandler<
  typeof postActionAllocateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
