import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CertificatesIdRoute,
  getV1CertificatesIdRoute,
  getV1CertificatesRoute,
  postV1CertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getV1CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
