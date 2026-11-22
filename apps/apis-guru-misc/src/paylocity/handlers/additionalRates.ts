import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const additionalRatesHandler = app.openapi(
  putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
