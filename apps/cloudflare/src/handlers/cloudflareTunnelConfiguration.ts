import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute,
  getAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute,
  getAccountsAccountIdWarpConnectorTunnelIdConfigurationsRoute,
  putAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute,
  putAccountsAccountIdWarpConnectorTunnelIdConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareTunnelConfigurationHandler = app
  .openapi(deleteAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCfdTunnelTunnelIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWarpConnectorTunnelIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWarpConnectorTunnelIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
