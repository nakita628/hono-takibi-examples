import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
  deleteZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  getZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  getZonesZoneIdCustomHostnamesQuotaRoute,
  getZonesZoneIdCustomHostnamesRoute,
  patchZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  postZonesZoneIdCustomHostnamesRoute,
  putZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customHostnameForAZoneHandler = app
  .openapi(getZonesZoneIdCustomHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCustomHostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomHostnamesQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCustomHostnamesCustomHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomHostnamesCustomHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCustomHostnamesCustomHostnameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
