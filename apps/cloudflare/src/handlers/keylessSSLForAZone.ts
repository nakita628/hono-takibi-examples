import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  getZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  getZonesZoneIdKeylessCertificatesRoute,
  patchZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  postZonesZoneIdKeylessCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keylessSSLForAZoneHandler = app
  .openapi(getZonesZoneIdKeylessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdKeylessCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
