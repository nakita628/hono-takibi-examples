import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdClientsClientIdConnectionStatsRoute,
  getNetworksNetworkIdClientsClientIdLatencyStatsRoute,
  getNetworksNetworkIdClientsConnectionStatsRoute,
  getNetworksNetworkIdClientsLatencyStatsRoute,
  getNetworksNetworkIdConnectionStatsRoute,
  getNetworksNetworkIdDevicesConnectionStatsRoute,
  getNetworksNetworkIdDevicesLatencyStatsRoute,
  getNetworksNetworkIdDevicesSerialConnectionStatsRoute,
  getNetworksNetworkIdDevicesSerialLatencyStatsRoute,
  getNetworksNetworkIdFailedConnectionsRoute,
  getNetworksNetworkIdLatencyStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessHealthHandler = app
  .openapi(getNetworksNetworkIdClientsConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFailedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
