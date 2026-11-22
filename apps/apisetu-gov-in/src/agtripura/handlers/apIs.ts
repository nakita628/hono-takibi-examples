import { OpenAPIHono } from '@hono/zod-openapi'
import { postPecerCertificateRoute, postPrfndCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postPecerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrfndCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
