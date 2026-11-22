import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CompaniesCompanyIdOpenapiRoute } from '../routes'

const app = new OpenAPIHono()

export const companySpecificSchemaHandler = app.openapi(
  getV2CompaniesCompanyIdOpenapiRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
