import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRegisteredDevicesIdRoute,
  getRegisteredDevicesRoute,
  patchRegisteredDevicesDeviceIdAssociationsRoute,
  patchRegisteredDevicesIdRoute,
  postRegisteredDevicesDeviceIdAssociationsRoute,
  postRegisteredDevicesRoute,
} from '../routes'

export const getRegisteredDevicesRouteHandler: RouteHandler<
  typeof getRegisteredDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegisteredDevicesRouteHandler: RouteHandler<
  typeof postRegisteredDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegisteredDevicesDeviceIdAssociationsRouteHandler: RouteHandler<
  typeof postRegisteredDevicesDeviceIdAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRegisteredDevicesDeviceIdAssociationsRouteHandler: RouteHandler<
  typeof patchRegisteredDevicesDeviceIdAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRegisteredDevicesIdRouteHandler: RouteHandler<
  typeof deleteRegisteredDevicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRegisteredDevicesIdRouteHandler: RouteHandler<
  typeof patchRegisteredDevicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
