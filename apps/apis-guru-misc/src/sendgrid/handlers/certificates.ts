import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSsoCertificatesCertIdRoute,
  getSsoCertificatesCertIdRoute,
  getSsoIntegrationsIntegrationIdCertificatesRoute,
  patchSsoCertificatesCertIdRoute,
  postSsoCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(postSsoCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoIntegrationsIntegrationIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
