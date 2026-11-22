import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialClientsRoute,
  getNetworksNetworkIdClientsClientIdEventsRoute,
  getNetworksNetworkIdClientsClientIdLatencyHistoryRoute,
  getNetworksNetworkIdClientsClientIdPolicyRoute,
  getNetworksNetworkIdClientsClientIdRoute,
  getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  getNetworksNetworkIdClientsClientIdUsageHistoryRoute,
  getNetworksNetworkIdClientsRoute,
  postNetworksNetworkIdClientsProvisionRoute,
  putNetworksNetworkIdClientsClientIdPolicyRoute,
  putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getDevicesSerialClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdClientsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
