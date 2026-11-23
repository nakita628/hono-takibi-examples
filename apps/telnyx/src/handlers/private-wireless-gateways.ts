import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysRoute,
  postPrivateWirelessGatewaysRoute,
} from '../routes'

export const getPrivateWirelessGatewaysRouteHandler: RouteHandler<
  typeof getPrivateWirelessGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrivateWirelessGatewaysRouteHandler: RouteHandler<
  typeof postPrivateWirelessGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrivateWirelessGatewaysIdRouteHandler: RouteHandler<
  typeof deletePrivateWirelessGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrivateWirelessGatewaysIdRouteHandler: RouteHandler<
  typeof getPrivateWirelessGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
