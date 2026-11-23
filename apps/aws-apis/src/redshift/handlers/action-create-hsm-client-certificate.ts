import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateHsmClientCertificateRoute,
  postActionCreateHsmClientCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateHsmClientCertificateHandler = app
  .openapi(getActionCreateHsmClientCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateHsmClientCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
