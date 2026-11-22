import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSecondaryDnsIncomingRoute,
  getZonesZoneIdSecondaryDnsIncomingRoute,
  postZonesZoneIdSecondaryDnsForceAxfrRoute,
  postZonesZoneIdSecondaryDnsIncomingRoute,
  putZonesZoneIdSecondaryDnsIncomingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secondaryDNSSecondaryZoneHandler = app
  .openapi(postZonesZoneIdSecondaryDnsForceAxfrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSecondaryDnsIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecondaryDnsIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecondaryDnsIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSecondaryDnsIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
