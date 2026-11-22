import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute,
  deleteAccountsAccountIdTeamnetRoutesRouteIdRoute,
  getAccountsAccountIdTeamnetRoutesIpIpRoute,
  getAccountsAccountIdTeamnetRoutesRoute,
  getAccountsAccountIdTeamnetRoutesRouteIdRoute,
  patchAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute,
  patchAccountsAccountIdTeamnetRoutesRouteIdRoute,
  postAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute,
  postAccountsAccountIdTeamnetRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tunnelRoutingHandler = app
  .openapi(getAccountsAccountIdTeamnetRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdTeamnetRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTeamnetRoutesIpIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdTeamnetRoutesNetworkIpNetworkEncodedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdTeamnetRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTeamnetRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdTeamnetRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
