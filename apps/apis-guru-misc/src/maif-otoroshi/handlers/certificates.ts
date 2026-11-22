import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCertificatesIdRoute,
  getApiCertificatesIdRoute,
  getApiCertificatesRoute,
  patchApiCertificatesIdRoute,
  postApiCertificatesRoute,
  putApiCertificatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getApiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
