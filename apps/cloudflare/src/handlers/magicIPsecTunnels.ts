import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute,
  getAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute,
  getAccountsAccountIdMagicIpsecTunnelsRoute,
  postAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdPskGenerateRoute,
  postAccountsAccountIdMagicIpsecTunnelsPskRoute,
  postAccountsAccountIdMagicIpsecTunnelsRoute,
  putAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute,
  putAccountsAccountIdMagicIpsecTunnelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicIPsecTunnelsHandler = app
  .openapi(getAccountsAccountIdMagicIpsecTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicIpsecTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicIpsecTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicIpsecTunnelsPskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicIpsecTunnelsIpsecTunnelIdPskGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
