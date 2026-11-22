import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallRulesRoute,
  deleteZonesZoneIdFirewallRulesRuleIdRoute,
  getZonesZoneIdFirewallRulesRoute,
  getZonesZoneIdFirewallRulesRuleIdRoute,
  patchZonesZoneIdFirewallRulesRoute,
  patchZonesZoneIdFirewallRulesRuleIdRoute,
  postZonesZoneIdFirewallRulesRoute,
  putZonesZoneIdFirewallRulesRoute,
  putZonesZoneIdFirewallRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewallRulesHandler = app
  .openapi(deleteZonesZoneIdFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFirewallRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
