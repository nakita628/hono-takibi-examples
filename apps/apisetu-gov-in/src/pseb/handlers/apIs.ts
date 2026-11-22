import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCemstCertificateRoute,
  postCfmstCertificateRoute,
  postHscerCertificateRoute,
  postMicerCertificateRoute,
  postSscerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCemstCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCfmstCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMicerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
