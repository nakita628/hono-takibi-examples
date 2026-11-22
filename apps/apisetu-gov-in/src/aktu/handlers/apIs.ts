import { OpenAPIHono } from '@hono/zod-openapi'
import { postDgcerCertificateRoute, postDgmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postDgcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDgmstCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
