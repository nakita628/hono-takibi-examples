import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWireguardInterfacesIdRoute,
  getWireguardInterfacesIdRoute,
  getWireguardInterfacesRoute,
  postWireguardInterfacesRoute,
} from '../routes'

export const getWireguardInterfacesRouteHandler: RouteHandler<
  typeof getWireguardInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWireguardInterfacesRouteHandler: RouteHandler<
  typeof postWireguardInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWireguardInterfacesIdRouteHandler: RouteHandler<
  typeof deleteWireguardInterfacesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWireguardInterfacesIdRouteHandler: RouteHandler<
  typeof getWireguardInterfacesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
