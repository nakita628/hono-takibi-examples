import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCtcerCertificateRoute,
  postEwcerCertificateRoute,
  postLhcerCertificateRoute,
  postObcerCertificateRoute,
  postRor1bCertificateRoute,
  postSlcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRor1bCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
