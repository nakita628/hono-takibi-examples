import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute,
  getAccountsAccountIdTeamnetVirtualNetworksRoute,
  getAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute,
  patchAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute,
  postAccountsAccountIdTeamnetVirtualNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tunnelVirtualNetworkHandler = app
  .openapi(getAccountsAccountIdTeamnetVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdTeamnetVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdTeamnetVirtualNetworksVirtualNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
