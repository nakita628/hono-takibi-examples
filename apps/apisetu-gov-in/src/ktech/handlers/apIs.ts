import { OpenAPIHono } from '@hono/zod-openapi'
import { postCocerCertificateRoute, postRfcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCocerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRfcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
