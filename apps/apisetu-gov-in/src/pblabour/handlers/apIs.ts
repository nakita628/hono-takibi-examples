import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlsfcCertificateRoute,
  postClcerCertificateRoute,
  postSrcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postAlsfcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSrcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
