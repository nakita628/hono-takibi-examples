import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxRoute } from '../routes'

const app = new OpenAPIHono()

export const nonPrimaryStateTaxHandler = app.openapi(
  putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
