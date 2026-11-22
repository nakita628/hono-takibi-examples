import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postHvcerCertificateRoute,
  postSscerCertificateRoute,
  postSsmgrCertificateRoute,
  postSvcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postHscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHsmgrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsmgrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
