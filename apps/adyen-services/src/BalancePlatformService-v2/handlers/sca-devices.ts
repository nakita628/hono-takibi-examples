import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScaDevicesDeviceIdRoute,
  patchScaDevicesDeviceIdRoute,
  postScaDevicesDeviceIdScaAssociationsRoute,
  postScaDevicesRoute,
} from '../routes'

export const postScaDevicesRouteHandler: RouteHandler<typeof postScaDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScaDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteScaDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScaDevicesDeviceIdRouteHandler: RouteHandler<
  typeof patchScaDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScaDevicesDeviceIdScaAssociationsRouteHandler: RouteHandler<
  typeof postScaDevicesDeviceIdScaAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
