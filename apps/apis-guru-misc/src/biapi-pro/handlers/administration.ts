import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClientsIdClientLogoRoute,
  deleteClientsIdClientRoute,
  deleteWebhooksAuthIdAuthRoute,
  deleteWebhooksAuthRoute,
  deleteWebhooksIdWebhookAddToDataKeyRoute,
  deleteWebhooksIdWebhookAddToDataRoute,
  deleteWebhooksIdWebhookRoute,
  deleteWebhooksRoute,
  getClientsIdClientRoute,
  getClientsRoute,
  getConfigLogsRoute,
  getConfigRoute,
  getMonitoringRoute,
  getPublickeyRoute,
  getWebhooksAuthRoute,
  getWebhooksIdWebhookAddToDataKeyRoute,
  getWebhooksIdWebhookAddToDataRoute,
  getWebhooksIdWebhookLogsRoute,
  getWebhooksRoute,
  postClientsIdClientLogoRoute,
  postClientsRoute,
  postConfigRoute,
  postTestSyncRoute,
  postTestWebhooksRoute,
  postWebhooksAuthIdAuthRoute,
  postWebhooksAuthRoute,
  postWebhooksIdWebhookAddToDataKeyRoute,
  postWebhooksIdWebhookAddToDataRoute,
  postWebhooksIdWebhookRoute,
  postWebhooksRoute,
  putClientsIdClientRoute,
  putWebhooksAuthIdAuthRoute,
  putWebhooksIdWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administrationHandler = app
  .openapi(getClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClientsIdClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClientsIdClientLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientsIdClientLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublickeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksAuthIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookAddToDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIdWebhookAddToDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIdWebhookLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
