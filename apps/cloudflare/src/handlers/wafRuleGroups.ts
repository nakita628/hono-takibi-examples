import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdGroupsRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wafRuleGroupsHandler = app
  .openapi(getZonesZoneIdFirewallWafPackagesPackageIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
