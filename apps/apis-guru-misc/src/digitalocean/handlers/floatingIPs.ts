import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2FloatingIpsFloatingIpRoute,
  getV2FloatingIpsFloatingIpRoute,
  getV2FloatingIpsRoute,
  postV2FloatingIpsRoute,
} from '../routes'

export const getV2FloatingIpsRouteHandler: RouteHandler<typeof getV2FloatingIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2FloatingIpsRouteHandler: RouteHandler<typeof postV2FloatingIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2FloatingIpsFloatingIpRouteHandler: RouteHandler<
  typeof deleteV2FloatingIpsFloatingIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsFloatingIpRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}
