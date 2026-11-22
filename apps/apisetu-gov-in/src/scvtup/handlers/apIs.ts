import { OpenAPIHono } from '@hono/zod-openapi'
import { postSkcerCertificateRoute, postSkmstCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postSkcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkmstCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
