import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdSslVerificationRoute,
  patchZonesZoneIdSslVerificationCertificatePackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslVerificationHandler = app
  .openapi(getZonesZoneIdSslVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSslVerificationCertificatePackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
