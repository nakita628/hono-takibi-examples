import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postErcerCertificateRoute,
  postPfdawCertificateRoute,
  postTpcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postErcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPfdawCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
