import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessCertificatesCertificateIdRoute,
  getZonesZoneIdAccessCertificatesCertificateIdRoute,
  getZonesZoneIdAccessCertificatesRoute,
  getZonesZoneIdAccessCertificatesSettingsRoute,
  postZonesZoneIdAccessCertificatesRoute,
  putZonesZoneIdAccessCertificatesCertificateIdRoute,
  putZonesZoneIdAccessCertificatesSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessMTLSAuthenticationHandler = app
  .openapi(getZonesZoneIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessCertificatesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
