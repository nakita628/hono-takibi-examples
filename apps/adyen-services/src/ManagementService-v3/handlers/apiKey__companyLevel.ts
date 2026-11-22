import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKey__companyLevelHandler = app.openapi(
  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
