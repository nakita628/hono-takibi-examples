import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdL3FirewallRulesRoute,
  putNetworksNetworkIdL3FirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxl3OutboundFirewallHandler = app
  .openapi(getNetworksNetworkIdL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
