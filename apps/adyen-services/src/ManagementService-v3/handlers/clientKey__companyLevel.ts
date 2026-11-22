import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const clientKey__companyLevelHandler = app.openapi(
  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
