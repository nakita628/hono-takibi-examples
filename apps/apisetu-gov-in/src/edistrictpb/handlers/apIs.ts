import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBtcerCertificateRoute,
  postDtcerCertificateRoute,
  postEwcerCertificateRoute,
  postObcerCertificateRoute,
  postRacerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postBtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRacerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
