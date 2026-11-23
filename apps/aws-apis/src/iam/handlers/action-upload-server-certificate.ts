import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUploadServerCertificateRoute,
  postActionUploadServerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUploadServerCertificateHandler = app
  .openapi(getActionUploadServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUploadServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
