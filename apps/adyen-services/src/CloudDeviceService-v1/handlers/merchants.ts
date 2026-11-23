import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMerchantsMerchantAccountConnectedDevicesRoute,
  getMerchantsMerchantAccountDevicesDeviceIdStatusRoute,
  postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute,
  postMerchantsMerchantAccountDevicesDeviceIdSyncRoute,
} from '../routes'

export const getMerchantsMerchantAccountConnectedDevicesRouteHandler: RouteHandler<
  typeof getMerchantsMerchantAccountConnectedDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantsMerchantAccountDevicesDeviceIdAsyncRouteHandler: RouteHandler<
  typeof postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantsMerchantAccountDevicesDeviceIdStatusRouteHandler: RouteHandler<
  typeof getMerchantsMerchantAccountDevicesDeviceIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantsMerchantAccountDevicesDeviceIdSyncRouteHandler: RouteHandler<
  typeof postMerchantsMerchantAccountDevicesDeviceIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
