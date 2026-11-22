import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCfdTunnelTunnelIdConnectionsRoute,
  deleteAccountsAccountIdCfdTunnelTunnelIdRoute,
  deleteAccountsAccountIdWarpConnectorTunnelIdRoute,
  getAccountsAccountIdCfdTunnelRoute,
  getAccountsAccountIdCfdTunnelTunnelIdConnectionsRoute,
  getAccountsAccountIdCfdTunnelTunnelIdConnectorsConnectorIdRoute,
  getAccountsAccountIdCfdTunnelTunnelIdRoute,
  getAccountsAccountIdCfdTunnelTunnelIdTokenRoute,
  getAccountsAccountIdTunnelsRoute,
  getAccountsAccountIdWarpConnectorRoute,
  getAccountsAccountIdWarpConnectorTunnelIdConnectionsRoute,
  getAccountsAccountIdWarpConnectorTunnelIdConnectorsConnectorIdRoute,
  getAccountsAccountIdWarpConnectorTunnelIdRoute,
  getAccountsAccountIdWarpConnectorTunnelIdTokenRoute,
  patchAccountsAccountIdCfdTunnelTunnelIdRoute,
  patchAccountsAccountIdWarpConnectorTunnelIdRoute,
  postAccountsAccountIdCfdTunnelRoute,
  postAccountsAccountIdCfdTunnelTunnelIdManagementRoute,
  postAccountsAccountIdWarpConnectorRoute,
  putAccountsAccountIdWarpConnectorTunnelIdFailoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareTunnelHandler = app
  .openapi(getAccountsAccountIdCfdTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCfdTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCfdTunnelTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCfdTunnelTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCfdTunnelTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCfdTunnelTunnelIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCfdTunnelTunnelIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCfdTunnelTunnelIdConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCfdTunnelTunnelIdManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCfdTunnelTunnelIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWarpConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWarpConnectorTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWarpConnectorTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorTunnelIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorTunnelIdConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWarpConnectorTunnelIdFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorTunnelIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
