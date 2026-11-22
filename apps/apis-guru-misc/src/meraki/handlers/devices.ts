import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdDevicesRoute,
  getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute,
  getNetworksNetworkIdDevicesSerialPerformanceRoute,
  getNetworksNetworkIdDevicesSerialRoute,
  getNetworksNetworkIdDevicesSerialUplinkRoute,
  getOrganizationsOrganizationIdDevicesRoute,
  postDevicesSerialSwitchPortsCycleRoute,
  postNetworksNetworkIdDevicesClaimRoute,
  postNetworksNetworkIdDevicesSerialRebootRoute,
  postNetworksNetworkIdDevicesSerialRemoveRoute,
  putNetworksNetworkIdDevicesSerialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(postDevicesSerialSwitchPortsCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesSerialRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesSerialRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialUplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
