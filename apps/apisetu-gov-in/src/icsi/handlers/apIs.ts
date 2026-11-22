import { OpenAPIHono } from '@hono/zod-openapi'
import { postGovidCertificateRoute, postMbcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postGovidCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
