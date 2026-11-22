import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEtcerCertificateRoute,
  postGovidCertificateRoute,
  postSicerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postEtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovidCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSicerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
