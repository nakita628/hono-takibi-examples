import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdL7FirewallRulesRoute,
  putNetworksNetworkIdL7FirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxl7FirewallHandler = app
  .openapi(getNetworksNetworkIdL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
