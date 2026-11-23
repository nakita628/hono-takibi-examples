import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessIpAddressAccessIpAddressIdRoute,
  getAccessIpAddressAccessIpAddressIdRoute,
  getAccessIpAddressRoute,
  postAccessIpAddressRoute,
} from '../routes'

export const getAccessIpAddressRouteHandler: RouteHandler<typeof getAccessIpAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccessIpAddressRouteHandler: RouteHandler<
  typeof postAccessIpAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccessIpAddressAccessIpAddressIdRouteHandler: RouteHandler<
  typeof deleteAccessIpAddressAccessIpAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessIpAddressAccessIpAddressIdRouteHandler: RouteHandler<
  typeof getAccessIpAddressAccessIpAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
