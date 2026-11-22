import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIncerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postSicrdCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSicrdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
