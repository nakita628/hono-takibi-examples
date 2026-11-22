import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdEmailRoutingDnsRoute,
  getZonesZoneIdEmailRoutingDnsRoute,
  getZonesZoneIdEmailRoutingRoute,
  patchZonesZoneIdEmailRoutingDnsRoute,
  patchZonesZoneIdEmailRoutingRoute,
  postZonesZoneIdEmailRoutingDisableRoute,
  postZonesZoneIdEmailRoutingDnsRoute,
  postZonesZoneIdEmailRoutingEnableRoute,
  postZonesZoneIdEmailRoutingUnlockRoute,
  putZonesZoneIdEmailRoutingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailRoutingSettingsHandler = app
  .openapi(getZonesZoneIdEmailRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdEmailRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdEmailRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailRoutingDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdEmailRoutingDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailRoutingDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdEmailRoutingDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailRoutingDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailRoutingEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailRoutingUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
