import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdFirewallWafPackagesPackageIdRulesRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wafRulesHandler = app
  .openapi(getZonesZoneIdFirewallWafPackagesPackageIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
