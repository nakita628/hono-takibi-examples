import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallUaRulesUaRuleIdRoute,
  getZonesZoneIdFirewallUaRulesRoute,
  getZonesZoneIdFirewallUaRulesUaRuleIdRoute,
  postZonesZoneIdFirewallUaRulesRoute,
  putZonesZoneIdFirewallUaRulesUaRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAgentBlockingRulesHandler = app
  .openapi(getZonesZoneIdFirewallUaRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFirewallUaRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFirewallUaRulesUaRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallUaRulesUaRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallUaRulesUaRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
