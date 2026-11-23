import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultConnectionsUnifiedApiServiceIdRoute,
  deleteVaultConsumersConsumerIdRoute,
  getVaultAuthorizeServiceIdApplicationIdRoute,
  getVaultCallbackRoute,
  getVaultConnectionsRoute,
  getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  getVaultConnectionsUnifiedApiServiceIdRoute,
  getVaultConsumersConsumerIdRoute,
  getVaultConsumersConsumerIdStatsRoute,
  getVaultConsumersRoute,
  getVaultLogsRoute,
  getVaultRevokeServiceIdApplicationIdRoute,
  patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  patchVaultConnectionsUnifiedApiServiceIdRoute,
  patchVaultConsumersConsumerIdRoute,
  postVaultConnectionsUnifiedApiServiceIdImportRoute,
  postVaultConnectionsUnifiedApiServiceIdRoute,
  postVaultConnectionsUnifiedApiServiceIdTokenRoute,
  postVaultConsumersRoute,
  postVaultSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vaultHandler = app
  .openapi(getVaultAuthorizeServiceIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultConnectionsUnifiedApiServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConnectionsUnifiedApiServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultConnectionsUnifiedApiServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultConnectionsUnifiedApiServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultConnectionsUnifiedApiServiceIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultConnectionsUnifiedApiServiceIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultConsumersConsumerIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultRevokeServiceIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
