import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute,
  getAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute,
  getAccountsAccountIdMagicGreTunnelsRoute,
  postAccountsAccountIdMagicGreTunnelsRoute,
  putAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute,
  putAccountsAccountIdMagicGreTunnelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicGRETunnelsHandler = app
  .openapi(getAccountsAccountIdMagicGreTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicGreTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicGreTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicGreTunnelsGreTunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
