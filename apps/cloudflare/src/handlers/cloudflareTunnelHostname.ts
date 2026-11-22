import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute,
  getAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute,
  getAccountsAccountIdTunnelsTunnelIdHostnamesRoute,
  patchAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute,
  postAccountsAccountIdTunnelsTunnelIdHostnamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareTunnelHostnameHandler = app
  .openapi(getAccountsAccountIdTunnelsTunnelIdHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdTunnelsTunnelIdHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdTunnelsTunnelIdHostnamesHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
