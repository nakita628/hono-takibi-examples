import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postHlipcCertificateRoute,
  postTwipcCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHlipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTwipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
