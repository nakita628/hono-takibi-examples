import { OpenAPIHono } from '@hono/zod-openapi'
import { postDrvlcCertificateRoute, postRvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postDrvlcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
