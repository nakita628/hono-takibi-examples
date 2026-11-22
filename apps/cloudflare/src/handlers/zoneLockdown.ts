import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdFirewallLockdownsLockDownsIdRoute,
  getZonesZoneIdFirewallLockdownsLockDownsIdRoute,
  getZonesZoneIdFirewallLockdownsRoute,
  postZonesZoneIdFirewallLockdownsRoute,
  putZonesZoneIdFirewallLockdownsLockDownsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLockdownHandler = app
  .openapi(getZonesZoneIdFirewallLockdownsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdFirewallLockdownsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdFirewallLockdownsLockDownsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdFirewallLockdownsLockDownsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdFirewallLockdownsLockDownsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
