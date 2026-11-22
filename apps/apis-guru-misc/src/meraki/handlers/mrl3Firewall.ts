import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute,
  putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mrl3FirewallHandler = app
  .openapi(getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
