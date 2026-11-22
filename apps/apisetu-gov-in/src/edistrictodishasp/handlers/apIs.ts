import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEgcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postLhcerCertificateRoute,
  postObcerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postEgcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
