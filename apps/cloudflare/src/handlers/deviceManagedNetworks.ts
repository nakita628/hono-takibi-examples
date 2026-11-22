import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesNetworksNetworkIdRoute,
  getAccountsAccountIdDevicesNetworksNetworkIdRoute,
  getAccountsAccountIdDevicesNetworksRoute,
  postAccountsAccountIdDevicesNetworksRoute,
  putAccountsAccountIdDevicesNetworksNetworkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagedNetworksHandler = app
  .openapi(getAccountsAccountIdDevicesNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDevicesNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
