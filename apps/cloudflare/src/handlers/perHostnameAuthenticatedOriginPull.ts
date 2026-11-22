import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesHostnameRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesRoute,
  postZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute,
  putZonesZoneIdOriginTlsClientAuthHostnamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const perHostnameAuthenticatedOriginPullHandler = app
  .openapi(getZonesZoneIdOriginTlsClientAuthHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdOriginTlsClientAuthHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdOriginTlsClientAuthHostnamesHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
