import { OpenAPIHono } from '@hono/zod-openapi'
import { postEscerCertificateRoute, postSkcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postEscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
