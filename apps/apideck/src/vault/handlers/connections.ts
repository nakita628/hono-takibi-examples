import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultConnectionsUnifiedApiServiceIdRoute,
  getVaultAuthorizeServiceIdApplicationIdRoute,
  getVaultCallbackRoute,
  getVaultConnectionsRoute,
  getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  getVaultConnectionsUnifiedApiServiceIdRoute,
  getVaultRevokeServiceIdApplicationIdRoute,
  patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute,
  patchVaultConnectionsUnifiedApiServiceIdRoute,
  postVaultConnectionsUnifiedApiServiceIdImportRoute,
  postVaultConnectionsUnifiedApiServiceIdRoute,
  postVaultConnectionsUnifiedApiServiceIdTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
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
  .openapi(getVaultRevokeServiceIdApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
