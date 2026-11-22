import { OpenAPIHono } from '@hono/zod-openapi'
import { postMicerCertificateRoute, postPvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postMicerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
