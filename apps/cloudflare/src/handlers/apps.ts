import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdFlagshipAppsAppIdRoute,
  getAccountsAccountIdFlagshipAppsAppIdRoute,
  getAccountsAccountIdFlagshipAppsRoute,
  getAccountsAccountIdRealtimeKitAppsAppIdRoute,
  getAccountsAccountIdRealtimeKitAppsRoute,
  patchAccountsAccountIdRealtimeKitAppsAppIdRoute,
  postAccountsAccountIdFlagshipAppsRoute,
  postAccountsAccountIdRealtimeKitAppsRoute,
  putAccountsAccountIdFlagshipAppsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAccountsAccountIdFlagshipAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdFlagshipAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdFlagshipAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdFlagshipAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdFlagshipAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRealtimeKitAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
