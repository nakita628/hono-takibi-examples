import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postCtcerCertificateRoute,
  postDtcerCertificateRoute,
  postEwcerCertificateRoute,
  postIncerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postBtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
