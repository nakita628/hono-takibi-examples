import { OpenAPIHono } from '@hono/zod-openapi'
import { postHvcerCertificateRoute, postSvcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postHvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
