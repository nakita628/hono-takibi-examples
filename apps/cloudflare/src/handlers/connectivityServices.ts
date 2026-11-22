import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute,
  getAccountsAccountIdConnectivityDirectoryServicesRoute,
  getAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute,
  postAccountsAccountIdConnectivityDirectoryServicesRoute,
  putAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectivityServicesHandler = app
  .openapi(getAccountsAccountIdConnectivityDirectoryServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdConnectivityDirectoryServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdConnectivityDirectoryServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
