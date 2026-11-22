import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateSigningCertificateRoute,
  postActionUpdateSigningCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateSigningCertificateHandler = app
  .openapi(getActionUpdateSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSigningCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
