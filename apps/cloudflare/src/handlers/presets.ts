import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute,
  getAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute,
  getAccountsAccountIdRealtimeKitAppIdPresetsRoute,
  patchAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute,
  postAccountsAccountIdRealtimeKitAppIdPresetsRoute,
  putAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const presetsHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRealtimeKitAppIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
