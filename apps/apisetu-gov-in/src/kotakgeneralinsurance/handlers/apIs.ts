import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postGicerCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
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
  .openapi(postGicerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHlipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHmipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTwipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
