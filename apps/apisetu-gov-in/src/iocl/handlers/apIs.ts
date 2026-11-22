import { OpenAPIHono } from '@hono/zod-openapi'
import { postLpgsvCertificateRoute, postLpgtvCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postLpgsvCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLpgtvCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
