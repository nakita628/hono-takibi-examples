import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSecondaryDnsPeersPeerIdRoute,
  getAccountsAccountIdSecondaryDnsPeersPeerIdRoute,
  getAccountsAccountIdSecondaryDnsPeersRoute,
  postAccountsAccountIdSecondaryDnsPeersRoute,
  putAccountsAccountIdSecondaryDnsPeersPeerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secondaryDNSPeerHandler = app
  .openapi(getAccountsAccountIdSecondaryDnsPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecondaryDnsPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecondaryDnsPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecondaryDnsPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSecondaryDnsPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
