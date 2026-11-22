import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationCertificatesCertificateIdRoute,
  getOrganizationCertificatesCertificateIdRoute,
  getOrganizationCertificatesRoute,
  getOrganizationProjectsProjectIdCertificatesRoute,
  postOrganizationCertificatesActivateRoute,
  postOrganizationCertificatesCertificateIdRoute,
  postOrganizationCertificatesDeactivateRoute,
  postOrganizationCertificatesRoute,
  postOrganizationProjectsProjectIdCertificatesActivateRoute,
  postOrganizationProjectsProjectIdCertificatesDeactivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getOrganizationCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdCertificatesActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdCertificatesDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
