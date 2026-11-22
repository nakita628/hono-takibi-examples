import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdCellularFirewallRulesRoute,
  putNetworksNetworkIdCellularFirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxCellularFirewallHandler = app
  .openapi(getNetworksNetworkIdCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
