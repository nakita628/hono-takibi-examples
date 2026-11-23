import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetServerCertificateRoute, postActionGetServerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetServerCertificateHandler = app
  .openapi(getActionGetServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
