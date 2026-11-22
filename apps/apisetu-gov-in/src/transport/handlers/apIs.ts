import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDrvlcCertificateRoute,
  postFitcerCertificateRoute,
  postRvcerCertificateRoute,
  postVhinscCertificateRoute,
  postVhtaxCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postDrvlcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFitcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVhinscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVhtaxCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
