import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantAccountConnectedDevicesRoute,
  getMerchantsMerchantAccountDevicesDeviceIdStatusRoute,
  postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute,
  postMerchantsMerchantAccountDevicesDeviceIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const merchantsHandler = app
  .openapi(getMerchantsMerchantAccountConnectedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantAccountDevicesDeviceIdAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantAccountDevicesDeviceIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantAccountDevicesDeviceIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
