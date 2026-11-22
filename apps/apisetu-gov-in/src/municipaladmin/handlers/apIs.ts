import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKecerCertificateRoute,
  postTapcnCertificateRoute,
  postTdlcsCertificateRoute,
  postUgdcnCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postKecerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTapcnCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTdlcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUgdcnCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
