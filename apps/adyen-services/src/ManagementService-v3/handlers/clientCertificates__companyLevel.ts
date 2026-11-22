import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdClientCertificatesRoute,
  postCompaniesCompanyIdClientCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientCertificates__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
