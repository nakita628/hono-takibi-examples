import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postCyipcCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCvipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCyipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHlipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHmipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTwipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
