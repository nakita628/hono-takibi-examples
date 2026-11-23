import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagServerCertificateRoute, postActionTagServerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagServerCertificateHandler = app
  .openapi(getActionTagServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagServerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
