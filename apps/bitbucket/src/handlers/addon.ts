import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAddonRoute, getAddonAddonKeyClientKeyRoute, putAddonRoute } from '../routes'

export const deleteAddonRouteHandler: RouteHandler<typeof deleteAddonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAddonRouteHandler: RouteHandler<typeof putAddonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddonAddonKeyClientKeyRouteHandler: RouteHandler<
  typeof getAddonAddonKeyClientKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
