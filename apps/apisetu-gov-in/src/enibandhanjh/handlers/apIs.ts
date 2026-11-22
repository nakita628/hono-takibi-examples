import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRdcerCertificateRoute,
  postRegriiCertificateRoute,
  postRmcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postRdcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegriiCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
