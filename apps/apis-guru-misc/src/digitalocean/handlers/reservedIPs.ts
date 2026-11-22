import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2ReservedIpsReservedIpRoute,
  getV2ReservedIpsReservedIpRoute,
  getV2ReservedIpsRoute,
  postV2ReservedIpsRoute,
} from '../routes'

export const getV2ReservedIpsRouteHandler: RouteHandler<typeof getV2ReservedIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2ReservedIpsRouteHandler: RouteHandler<typeof postV2ReservedIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2ReservedIpsReservedIpRouteHandler: RouteHandler<
  typeof deleteV2ReservedIpsReservedIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReservedIpsReservedIpRouteHandler: RouteHandler<
  typeof getV2ReservedIpsReservedIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}
