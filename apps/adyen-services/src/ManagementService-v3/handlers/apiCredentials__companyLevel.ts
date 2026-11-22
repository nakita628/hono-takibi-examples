import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdApiCredentialsApiCredentialIdRoute,
  getCompaniesCompanyIdApiCredentialsRoute,
  patchCompaniesCompanyIdApiCredentialsApiCredentialIdRoute,
  postCompaniesCompanyIdApiCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiCredentials__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
