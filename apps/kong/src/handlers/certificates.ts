import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesRoute,
  patchCertificatesCertificateIdRoute,
  postCertificatesRoute,
  putCertificatesCertificateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
