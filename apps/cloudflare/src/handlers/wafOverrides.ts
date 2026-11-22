import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallWafOverridesOverridesIdRoute,
  getZonesZoneIdFirewallWafOverridesOverridesIdRoute,
  getZonesZoneIdFirewallWafOverridesRoute,
  postZonesZoneIdFirewallWafOverridesRoute,
  putZonesZoneIdFirewallWafOverridesOverridesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wafOverridesHandler = app
  .openapi(getZonesZoneIdFirewallWafOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFirewallWafOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFirewallWafOverridesOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallWafOverridesOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallWafOverridesOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
