import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postCtcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpicrCertificateRoute,
  postDtcerCertificateRoute,
  postIncerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postBtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDpicrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
