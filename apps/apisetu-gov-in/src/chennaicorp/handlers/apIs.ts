import { OpenAPIHono } from '@hono/zod-openapi'
import { postBtcerCertificateRoute, postDtcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postBtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
