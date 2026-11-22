import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSigningCertificateRoute,
  postActionDeleteSigningCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSigningCertificateHandler = app
  .openapi(getActionDeleteSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
