import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute,
  getAccountsAccountIdZerotrustSubnetsCloudflareSourceAddressFamilyRoute,
  getAccountsAccountIdZerotrustSubnetsInitialResolvedIpAddressFamilyRoute,
  getAccountsAccountIdZerotrustSubnetsRoute,
  getAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute,
  patchAccountsAccountIdZerotrustSubnetsCloudflareSourceAddressFamilyRoute,
  patchAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute,
  postAccountsAccountIdZerotrustSubnetsWarpRoute,
  putAccountsAccountIdZerotrustSubnetsInitialResolvedIpAddressFamilyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustSubnetsHandler = app
  .openapi(getAccountsAccountIdZerotrustSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustSubnetsCloudflareSourceAddressFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdZerotrustSubnetsCloudflareSourceAddressFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustSubnetsInitialResolvedIpAddressFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdZerotrustSubnetsInitialResolvedIpAddressFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdZerotrustSubnetsWarpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdZerotrustSubnetsWarpSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
