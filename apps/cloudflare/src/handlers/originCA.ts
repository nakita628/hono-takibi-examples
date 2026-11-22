import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesCertificateIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesRoute,
  postCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originCAHandler = app
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
