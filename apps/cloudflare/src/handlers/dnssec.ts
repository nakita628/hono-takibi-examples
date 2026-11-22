import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdDnssecRoute,
  getZonesZoneIdDnssecRoute,
  getZonesZoneIdDnssecZskRoute,
  patchZonesZoneIdDnssecRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnssecHandler = app
  .openapi(deleteZonesZoneIdDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnssecZskRoute, (c) => {
    throw new Error('Not implemented')
  })
