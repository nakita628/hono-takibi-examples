import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute,
  getAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute,
  getAccountsAccountIdZerotrustRoutesHostnameRoute,
  patchAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute,
  postAccountsAccountIdZerotrustRoutesHostnameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustHostnameRouteHandler = app
  .openapi(getAccountsAccountIdZerotrustRoutesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdZerotrustRoutesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdZerotrustRoutesHostnameHostnameRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
