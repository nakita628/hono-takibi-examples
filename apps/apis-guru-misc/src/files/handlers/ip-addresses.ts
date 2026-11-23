import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIpAddressesExavaultReservedRoute,
  getIpAddressesReservedRoute,
  getIpAddressesRoute,
} from '../routes'

export const getIpAddressesRouteHandler: RouteHandler<typeof getIpAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpAddressesExavaultReservedRouteHandler: RouteHandler<
  typeof getIpAddressesExavaultReservedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpAddressesReservedRouteHandler: RouteHandler<
  typeof getIpAddressesReservedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
