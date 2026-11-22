import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhcerCertificateRoute, postRpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postPhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
