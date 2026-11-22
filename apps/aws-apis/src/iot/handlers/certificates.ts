import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesRoute,
  postCertificatesRoute,
  putCertificatesCertificateIdNewStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(postCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCertificatesCertificateIdNewStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
