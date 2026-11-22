import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCtcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postRscerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
