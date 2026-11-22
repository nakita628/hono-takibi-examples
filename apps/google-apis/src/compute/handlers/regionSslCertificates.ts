import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionSslCertificatesSslCertificateRoute,
  getProjectsProjectRegionsRegionSslCertificatesRoute,
  getProjectsProjectRegionsRegionSslCertificatesSslCertificateRoute,
  postProjectsProjectRegionsRegionSslCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionSslCertificatesHandler = app
  .openapi(getProjectsProjectRegionsRegionSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionSslCertificatesSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSslCertificatesSslCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
