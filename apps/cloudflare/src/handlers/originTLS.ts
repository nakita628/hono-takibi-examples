import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  getZonesZoneIdSettingsAutoOriginTlsKexRoute,
  getZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  patchZonesZoneIdSettingsAutoOriginTlsKexRoute,
  patchZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  putZonesZoneIdSettingsOriginTlsComplianceModesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originTLSHandler = app
  .openapi(getZonesZoneIdSettingsAutoOriginTlsKexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsAutoOriginTlsKexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSettingsOriginTlsComplianceModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSettingsOriginTlsComplianceModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsOriginTlsComplianceModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSettingsOriginTlsComplianceModesRoute, (c) => {
    throw new Error('Not implemented')
  })
