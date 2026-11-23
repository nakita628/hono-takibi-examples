import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesIdRoute,
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  getCertificatesIdRoute,
  getCertificatesRoute,
  postCertificatesIdActionsRetryRoute,
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
  .openapi(getCertificatesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesIdActionsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
