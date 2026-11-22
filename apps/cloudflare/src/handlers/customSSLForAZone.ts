import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  getZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  getZonesZoneIdCustomCertificatesRoute,
  patchZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  postZonesZoneIdCustomCertificatesRoute,
  putZonesZoneIdCustomCertificatesPrioritizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customSSLForAZoneHandler = app
  .openapi(getZonesZoneIdCustomCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCustomCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCustomCertificatesPrioritizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCustomCertificatesCustomCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomCertificatesCustomCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCustomCertificatesCustomCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
