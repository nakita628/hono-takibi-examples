import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateServerCertificateRoute,
  postActionUpdateServerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateServerCertificateHandler = app
  .openapi(getActionUpdateServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
