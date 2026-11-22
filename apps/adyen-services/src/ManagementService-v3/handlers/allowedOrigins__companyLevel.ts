import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowedOrigins__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
