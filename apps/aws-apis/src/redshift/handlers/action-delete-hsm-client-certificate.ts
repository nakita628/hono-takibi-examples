import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteHsmClientCertificateRoute,
  postActionDeleteHsmClientCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteHsmClientCertificateHandler = app
  .openapi(getActionDeleteHsmClientCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteHsmClientCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
