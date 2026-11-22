import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute,
  deleteAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute,
  getAccountsAccountIdDataSecurityPostureWebhooksRoute,
  getAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute,
  getAccountsAccountIdRealtimeKitAppIdWebhooksAllRoute,
  getAccountsAccountIdRealtimeKitAppIdWebhooksRoute,
  getAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute,
  patchAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute,
  postAccountsAccountIdDataSecurityPostureWebhooksEvaluateRoute,
  postAccountsAccountIdDataSecurityPostureWebhooksJobsRoute,
  postAccountsAccountIdDataSecurityPostureWebhooksRoute,
  postAccountsAccountIdDataSecurityPostureWebhooksWebhookIdEvaluateRoute,
  postAccountsAccountIdRealtimeKitAppIdWebhooksRoute,
  putAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute,
  putAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getAccountsAccountIdDataSecurityPostureWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureWebhooksEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureWebhooksJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDataSecurityPostureWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPostureWebhooksWebhookIdEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdWebhooksAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRealtimeKitAppIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
