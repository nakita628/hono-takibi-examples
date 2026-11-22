import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute,
  getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute,
  getSyncCommerceConfigUiTextRoute,
  patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute,
  patchSyncCommerceConfigUiTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncFlowPreferencesHandler = app
  .openapi(getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncCommerceConfigUiTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSyncCommerceConfigUiTextRoute, (c) => {
    throw new Error('Not implemented')
  })
