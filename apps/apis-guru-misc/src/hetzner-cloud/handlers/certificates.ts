import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesIdRoute,
  getCertificatesIdRoute,
  getCertificatesRoute,
  postCertificatesRoute,
  putCertificatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
