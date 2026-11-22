import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CompanySearchCompanyNameRoute } from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app.openapi(getApiV1CompanySearchCompanyNameRoute, (c) => {
  throw new Error('Not implemented')
})
