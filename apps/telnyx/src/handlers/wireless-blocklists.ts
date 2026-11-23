import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWirelessBlocklistsIdRoute,
  getWirelessBlocklistsIdRoute,
  getWirelessBlocklistsRoute,
  patchWirelessBlocklistsIdRoute,
  postWirelessBlocklistsRoute,
} from '../routes'

export const getWirelessBlocklistsRouteHandler: RouteHandler<
  typeof getWirelessBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWirelessBlocklistsRouteHandler: RouteHandler<
  typeof postWirelessBlocklistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWirelessBlocklistsIdRouteHandler: RouteHandler<
  typeof deleteWirelessBlocklistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWirelessBlocklistsIdRouteHandler: RouteHandler<
  typeof getWirelessBlocklistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWirelessBlocklistsIdRouteHandler: RouteHandler<
  typeof patchWirelessBlocklistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
