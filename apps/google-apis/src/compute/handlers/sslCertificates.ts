import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalSslCertificatesSslCertificateRoute,
  getProjectsProjectAggregatedSslCertificatesRoute,
  getProjectsProjectGlobalSslCertificatesRoute,
  getProjectsProjectGlobalSslCertificatesSslCertificateRoute,
  postProjectsProjectGlobalSslCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslCertificatesHandler = app
  .openapi(getProjectsProjectAggregatedSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalSslCertificatesSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSslCertificatesSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
