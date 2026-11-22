import { OpenAPIHono } from '@hono/zod-openapi'
import { postCncerCertificateRoute, postMutanCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMutanCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
