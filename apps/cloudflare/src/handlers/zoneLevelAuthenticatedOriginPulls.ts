import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdOriginTlsClientAuthCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthRoute,
  getZonesZoneIdOriginTlsClientAuthSettingsRoute,
  postZonesZoneIdOriginTlsClientAuthRoute,
  putZonesZoneIdOriginTlsClientAuthSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAuthenticatedOriginPullsHandler = app
  .openapi(getZonesZoneIdOriginTlsClientAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdOriginTlsClientAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginTlsClientAuthSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdOriginTlsClientAuthSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdOriginTlsClientAuthCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginTlsClientAuthCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
