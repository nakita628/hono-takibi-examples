import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdFirewallWafPackagesPackageIdRoute,
  getZonesZoneIdFirewallWafPackagesRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wafPackagesHandler = app
  .openapi(getZonesZoneIdFirewallWafPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallWafPackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdFirewallWafPackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
