import { OpenAPIHono } from '@hono/zod-openapi'
import { postHscerCertificateRoute, postSscerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postHscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
