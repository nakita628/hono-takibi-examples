import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteVirtualNetworksIdRoute, getVirtualNetworksIdRoute } from '../routes'

export const deleteVirtualNetworksIdRouteHandler: RouteHandler<
  typeof deleteVirtualNetworksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVirtualNetworksIdRouteHandler: RouteHandler<
  typeof getVirtualNetworksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
