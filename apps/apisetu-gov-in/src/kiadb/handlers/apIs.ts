import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAlltrCertificateRoute,
  postBknocCertificateRoute,
  postBpcerCertificateRoute,
  postCfltrCertificateRoute,
  postLcsagCertificateRoute,
  postPscerCertificateRoute,
  postPsnocCertificateRoute,
  postWtrblCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postAlltrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBknocCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCfltrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLcsagCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPsnocCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWtrblCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
