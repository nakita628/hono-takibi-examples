import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworksIdDefaultGatewayRoute,
  deleteNetworksIdRoute,
  getNetworksIdDefaultGatewayRoute,
  getNetworksIdNetworkInterfacesRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  patchNetworksIdRoute,
  postNetworksIdDefaultGatewayRoute,
  postNetworksRoute,
} from '../routes'

export const getNetworksRouteHandler: RouteHandler<typeof getNetworksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksRouteHandler: RouteHandler<typeof postNetworksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksIdRouteHandler: RouteHandler<typeof deleteNetworksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNetworksIdRouteHandler: RouteHandler<typeof getNetworksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNetworksIdRouteHandler: RouteHandler<typeof patchNetworksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksIdDefaultGatewayRouteHandler: RouteHandler<
  typeof deleteNetworksIdDefaultGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksIdDefaultGatewayRouteHandler: RouteHandler<
  typeof getNetworksIdDefaultGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksIdDefaultGatewayRouteHandler: RouteHandler<
  typeof postNetworksIdDefaultGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksIdNetworkInterfacesRouteHandler: RouteHandler<
  typeof getNetworksIdNetworkInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
