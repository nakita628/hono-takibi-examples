import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionNetworkingFirewallsSettingsRoute,
  putApiVersionNetworkingFirewallsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallSettingsHandler = app
  .openapi(getApiVersionNetworkingFirewallsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
