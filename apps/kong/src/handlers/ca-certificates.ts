import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCaCertificatesCaCertificateIdRoute,
  getCaCertificatesCaCertificateIdRoute,
  getCaCertificatesRoute,
  patchCaCertificatesCaCertificateIdRoute,
  postCaCertificatesRoute,
  putCaCertificatesCaCertificateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caCertificatesHandler = app
  .openapi(getCaCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCaCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCaCertificatesCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaCertificatesCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCaCertificatesCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCaCertificatesCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
