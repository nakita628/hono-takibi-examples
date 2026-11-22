import { OpenAPIHono } from '@hono/zod-openapi'
import { postRdcerCertificateRoute, postRor1bCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postRdcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRor1bCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
