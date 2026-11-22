import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute, postPhcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postGovidCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
