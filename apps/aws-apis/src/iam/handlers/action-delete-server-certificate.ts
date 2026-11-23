import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteServerCertificateRoute,
  postActionDeleteServerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteServerCertificateHandler = app
  .openapi(getActionDeleteServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
