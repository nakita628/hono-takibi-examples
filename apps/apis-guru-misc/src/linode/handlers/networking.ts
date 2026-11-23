import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  deleteNetworkingFirewallsFirewallIdRoute,
  deleteNetworkingIpv6RangesRangeRoute,
  getNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  getNetworkingFirewallsFirewallIdDevicesRoute,
  getNetworkingFirewallsFirewallIdRoute,
  getNetworkingFirewallsFirewallIdRulesRoute,
  getNetworkingFirewallsRoute,
  getNetworkingIpsAddressRoute,
  getNetworkingIpsRoute,
  getNetworkingIpv6PoolsRoute,
  getNetworkingIpv6RangesRangeRoute,
  getNetworkingIpv6RangesRoute,
  getNetworkingVlansRoute,
  postNetworkingFirewallsFirewallIdDevicesRoute,
  postNetworkingFirewallsRoute,
  postNetworkingIpsAssignRoute,
  postNetworkingIpsRoute,
  postNetworkingIpsShareRoute,
  postNetworkingIpv4AssignRoute,
  postNetworkingIpv4ShareRoute,
  postNetworkingIpv6RangesRoute,
  putNetworkingFirewallsFirewallIdRoute,
  putNetworkingFirewallsFirewallIdRulesRoute,
  putNetworkingIpsAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkingHandler = app
  .openapi(getNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpv4AssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpv4ShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingIpv6PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkingVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
