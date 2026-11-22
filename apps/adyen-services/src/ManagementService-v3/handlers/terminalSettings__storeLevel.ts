import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdStoresReferenceTerminalLogosRoute,
  getMerchantsMerchantIdStoresReferenceTerminalSettingsRoute,
  getStoresStoreIdTerminalLogosRoute,
  getStoresStoreIdTerminalSettingsRoute,
  patchMerchantsMerchantIdStoresReferenceTerminalLogosRoute,
  patchMerchantsMerchantIdStoresReferenceTerminalSettingsRoute,
  patchStoresStoreIdTerminalLogosRoute,
  patchStoresStoreIdTerminalSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalSettings__storeLevelHandler = app
  .openapi(getMerchantsMerchantIdStoresReferenceTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresReferenceTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresReferenceTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresReferenceTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresStoreIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStoresStoreIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
