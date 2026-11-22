import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxl3InboundFirewallHandler = app
  .openapi(getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
