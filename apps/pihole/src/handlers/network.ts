import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworkDevicesDeviceIdRoute,
  getNetworkDevicesRoute,
  getNetworkGatewayRoute,
  getNetworkInterfacesRoute,
  getNetworkRoutesRoute,
} from '../routes'

export const getNetworkDevicesRouteHandler: RouteHandler<typeof getNetworkDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteNetworkDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteNetworkDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworkGatewayRouteHandler: RouteHandler<typeof getNetworkGatewayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNetworkRoutesRouteHandler: RouteHandler<typeof getNetworkRoutesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNetworkInterfacesRouteHandler: RouteHandler<
  typeof getNetworkInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
