import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlimwCertificateRoute,
  postAlsblCertificateRoute,
  postAlsfcCertificateRoute,
  postApptuCertificateRoute,
  postClcerCertificateRoute,
  postNooclCertificateRoute,
  postSrcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postAlimwCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlsblCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlsfcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApptuCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNooclCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSrcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
