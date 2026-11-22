import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHpcerCertificateRoute,
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postSpcerCertificateRoute,
  postSscerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postHpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHsmgrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
