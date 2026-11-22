import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdClientCertificatesClientCertificateIdRoute,
  getZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute,
  getZonesZoneIdClientCertificatesClientCertificateIdRoute,
  getZonesZoneIdClientCertificatesRoute,
  patchZonesZoneIdClientCertificatesClientCertificateIdRoute,
  postZonesZoneIdClientCertificatesRoute,
  putZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiShieldClientCertificatesForAZoneHandler = app
  .openapi(getZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdClientCertificatesClientCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdClientCertificatesClientCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdClientCertificatesClientCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
