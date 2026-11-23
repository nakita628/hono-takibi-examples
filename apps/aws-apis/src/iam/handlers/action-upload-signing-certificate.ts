import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUploadSigningCertificateRoute,
  postActionUploadSigningCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUploadSigningCertificateHandler = app
  .openapi(getActionUploadSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUploadSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
