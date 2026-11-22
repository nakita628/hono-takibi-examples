import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdZerotrustRegionRoute,
  getAccountsAccountIdZerotrustRegionRoute,
  getAccountsAccountIdZerotrustRegionsRoute,
  putAccountsAccountIdZerotrustRegionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustAccountRegionHandler = app
  .openapi(deleteAccountsAccountIdZerotrustRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdZerotrustRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
