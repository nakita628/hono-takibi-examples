import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  getApiVersionNetworkingFirewallsFirewallIdDevicesRoute,
  postApiVersionNetworkingFirewallsFirewallIdDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(postApiVersionNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
