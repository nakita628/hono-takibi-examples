import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWireguardPeersIdRoute,
  getWireguardPeersIdConfigRoute,
  getWireguardPeersIdRoute,
  getWireguardPeersRoute,
  patchWireguardPeersIdRoute,
  postWireguardPeersRoute,
} from '../routes'

export const getWireguardPeersRouteHandler: RouteHandler<typeof getWireguardPeersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWireguardPeersRouteHandler: RouteHandler<typeof postWireguardPeersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWireguardPeersIdRouteHandler: RouteHandler<
  typeof deleteWireguardPeersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWireguardPeersIdRouteHandler: RouteHandler<
  typeof getWireguardPeersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWireguardPeersIdRouteHandler: RouteHandler<
  typeof patchWireguardPeersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWireguardPeersIdConfigRouteHandler: RouteHandler<
  typeof getWireguardPeersIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
