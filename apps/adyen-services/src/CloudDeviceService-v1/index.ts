import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantAccountConnectedDevicesRoute,
  getMerchantsMerchantAccountDevicesDeviceIdStatusRoute,
  postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute,
  postMerchantsMerchantAccountDevicesDeviceIdSyncRoute,
} from './routes'
import {
  getMerchantsMerchantAccountConnectedDevicesRouteHandler,
  getMerchantsMerchantAccountDevicesDeviceIdStatusRouteHandler,
  postMerchantsMerchantAccountDevicesDeviceIdAsyncRouteHandler,
  postMerchantsMerchantAccountDevicesDeviceIdSyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getMerchantsMerchantAccountConnectedDevicesRoute,
    getMerchantsMerchantAccountConnectedDevicesRouteHandler,
  )
  .openapi(
    postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute,
    postMerchantsMerchantAccountDevicesDeviceIdAsyncRouteHandler,
  )
  .openapi(
    getMerchantsMerchantAccountDevicesDeviceIdStatusRoute,
    getMerchantsMerchantAccountDevicesDeviceIdStatusRouteHandler,
  )
  .openapi(
    postMerchantsMerchantAccountDevicesDeviceIdSyncRoute,
    postMerchantsMerchantAccountDevicesDeviceIdSyncRouteHandler,
  )

export default app
