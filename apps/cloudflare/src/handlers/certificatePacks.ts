import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  getZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  getZonesZoneIdSslCertificatePacksQuotaRoute,
  getZonesZoneIdSslCertificatePacksRoute,
  patchZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  postZonesZoneIdSslCertificatePacksOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatePacksHandler = app
  .openapi(getZonesZoneIdSslCertificatePacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSslCertificatePacksOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSslCertificatePacksQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSslCertificatePacksCertificatePackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSslCertificatePacksCertificatePackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSslCertificatePacksCertificatePackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
