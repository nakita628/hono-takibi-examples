import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdAndroidAppsIdRoute,
  getCompaniesCompanyIdAndroidAppsRoute,
  getCompaniesCompanyIdAndroidCertificatesRoute,
  patchCompaniesCompanyIdAndroidAppsIdRoute,
  postCompaniesCompanyIdAndroidAppsRoute,
  postCompaniesCompanyIdAndroidCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const androidFiles__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdAndroidAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdAndroidAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdAndroidCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdAndroidCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
