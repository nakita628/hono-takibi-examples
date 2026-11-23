import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicesDeviceIdDeviceIdRoute,
  getDevicesDeviceIdDeviceIdRoute,
  patchDevicesDeviceIdDeviceIdRoute,
} from '../routes'

export const getDevicesDeviceIdDeviceIdRouteHandler: RouteHandler<
  typeof getDevicesDeviceIdDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDevicesDeviceIdDeviceIdRouteHandler: RouteHandler<
  typeof patchDevicesDeviceIdDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesDeviceIdDeviceIdRouteHandler: RouteHandler<
  typeof deleteDevicesDeviceIdDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
