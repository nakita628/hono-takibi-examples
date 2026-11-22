import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSecondaryDnsOutgoingRoute,
  getZonesZoneIdSecondaryDnsOutgoingRoute,
  getZonesZoneIdSecondaryDnsOutgoingStatusRoute,
  postZonesZoneIdSecondaryDnsOutgoingDisableRoute,
  postZonesZoneIdSecondaryDnsOutgoingEnableRoute,
  postZonesZoneIdSecondaryDnsOutgoingForceNotifyRoute,
  postZonesZoneIdSecondaryDnsOutgoingRoute,
  putZonesZoneIdSecondaryDnsOutgoingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secondaryDNSPrimaryZoneHandler = app
  .openapi(deleteZonesZoneIdSecondaryDnsOutgoingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecondaryDnsOutgoingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecondaryDnsOutgoingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSecondaryDnsOutgoingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecondaryDnsOutgoingDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecondaryDnsOutgoingEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSecondaryDnsOutgoingForceNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecondaryDnsOutgoingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
